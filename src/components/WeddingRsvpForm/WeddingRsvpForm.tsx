import { OutputOf } from "io-ts";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { rsvpBody } from "../../queries/decoders";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";

export type WeddingFormData = NonNullable<OutputOf<typeof rsvpBody>["wedding"]>;

interface Props {
  auth: AuthData;
  onCancel: () => void;
  onSubmit: (values: WeddingFormData) => void;
  saving: boolean;
  onRsvpLinkClick: () => void;
}

export const WeddingRsvpForm: FC<Props> = ({
  auth,
  onCancel,
  onSubmit,
  saving,
  onRsvpLinkClick,
}) => {
  const { t } = useTranslation();
  const [rsvpData, setRsvpData] = useState<
    Partial<Pick<WeddingFormData, "acceptCount" | "declineCount">> &
      Pick<WeddingFormData, "notes">
  >({
    acceptCount: auth.weddingAcceptedCount,
    declineCount: auth.weddingDeclinedCount,
    notes: "",
  });

  const submit = () =>
    onSubmit({
      notes: rsvpData.notes,
      acceptCount: rsvpData.acceptCount || 0,
      declineCount: rsvpData.declineCount || 0,
    });

  // @ts-ignore
  const weddingCountMax = auth?.familyNames?.length || 2;

  return (
    <form onSubmit={submit}>
      <div style={{ marginTop: 10, padding: "0 10px", marginBottom: 10 }}>
        {
          <div className="attendDecline">
            <div className="dropdownRow">
              <div>
                {t("attendingCount", { count: rsvpData.acceptCount || 0 })}
              </div>
              <Dropdown
                maxNum={weddingCountMax}
                value={rsvpData.acceptCount || 0}
                onChange={(acceptCount) =>
                  setRsvpData((rsvp) => ({
                    ...rsvp,
                    acceptCount,
                    declineCount: Math.min(
                      weddingCountMax - acceptCount,
                      rsvp.declineCount || 0
                    ),
                  }))
                }
              />
            </div>
            <div className="dropdownRow">
              <div>{t("decliningCount")}</div>
              <Dropdown
                maxNum={weddingCountMax}
                value={rsvpData.declineCount}
                onChange={(declineCount) =>
                  setRsvpData((rsvp) => ({
                    ...rsvp,
                    declineCount,
                    acceptCount: Math.min(
                      weddingCountMax - declineCount,
                      rsvp.acceptCount || 0
                    ),
                  }))
                }
              />
            </div>
          </div>
        }

        <textarea
          value={rsvpData.notes}
          placeholder={t("rsvpForm.notes")}
          onChange={(e) =>
            setRsvpData((rsvp) => ({ ...rsvp, notes: e.target.value }))
          }
        />
        <div>
          <a onClick={() => onRsvpLinkClick()} style={{}} href="#">
            {t("rsvpForm.faqWarning")}
          </a>
        </div>
      </div>

      <Button label={t("cancel")} color="cancel" onPress={onCancel} />
      <Button
        label={t("welcome.enterButton")}
        color="primary"
        onPress={submit}
        loading={saving}
        disabled={
          (rsvpData.acceptCount || 0) + (rsvpData.declineCount || 0) === 0
        }
      />
    </form>
  );
};
