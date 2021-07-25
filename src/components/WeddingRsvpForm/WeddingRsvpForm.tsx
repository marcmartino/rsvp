import { OutputOf } from "io-ts";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { rsvpBody } from "../../queries/decoders";
import { Button } from "../Button/Button";

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
            <div>
              <div>
                {t("attendingCount", { count: rsvpData.acceptCount || 0 })}
              </div>
              <input
                type="range"
                min="0"
                max={weddingCountMax}
                step="1"
                value={rsvpData.acceptCount || 0}
                id="acceptCountCouple"
                onChange={(e) =>
                  setRsvpData((rsvp) => ({
                    ...rsvp,
                    acceptCount: parseInt(e.target.value || "0", 10),
                    declineCount: Math.min(
                      weddingCountMax - parseInt(e.target.value || "0", 10),
                      rsvp.declineCount || 0
                    ),
                  }))
                }
              />
            </div>
            <div>
              <div>
                {t("decliningCount", { count: rsvpData.declineCount || 0 })}
              </div>
              <input
                type="range"
                min="0"
                max={weddingCountMax}
                step="1"
                value={rsvpData.declineCount || 0}
                onChange={(e) =>
                  setRsvpData((rsvp) => ({
                    ...rsvp,
                    declineCount: parseInt(e.target.value || "0", 10),
                    acceptCount: Math.min(
                      weddingCountMax - parseInt(e.target.value || "0", 10),
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
      />
    </form>
  );
};
