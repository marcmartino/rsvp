import { OutputOf } from "io-ts";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { rsvpBody } from "../../queries/decoders";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";

export type ReceptionFormData = NonNullable<
  OutputOf<typeof rsvpBody>["reception"]
>;

interface Props {
  auth: AuthData;
  onCancel: () => void;
  onSubmit: (values: ReceptionFormData) => void;
  saving: boolean;
  onRsvpLinkClick: () => void;
}

export const ReceptionRsvpForm: FC<Props> = ({
  auth,
  onCancel,
  onSubmit,
  saving,
  onRsvpLinkClick,
}) => {
  const { t } = useTranslation();
  const [famNamesCache, setFamNamesCache] = useState<string[]>([]);
  const [rsvpData, setRsvpData] = useState<
    Partial<Pick<ReceptionFormData, "acceptCount" | "declineCount">> &
      Pick<
        ReceptionFormData,
        "notes" | "attendeeNames" | "childrenAttendingCount" | "foodPreferences"
      >
  >({
    acceptCount: auth.receptionAcceptedCount,
    declineCount: auth.receptionDeclinedCount,
    notes: "",
    foodPreferences: [],
    attendeeNames: [],
    childrenAttendingCount: 0,
  });

  const submit = () =>
    onSubmit({
      ...rsvpData,
      acceptCount: rsvpData.acceptCount || 0,
      declineCount: rsvpData.declineCount || 0,
    });

  // @ts-ignore
  const receptionCountMax = auth?.familyNames?.length || 2;

  return (
    <form onSubmit={submit}>
      <div style={{ marginTop: 10, padding: "0 10px", marginBottom: 10 }}>
        {
          <div className="attendDecline">
            <div className="dropdownRow">
              <div>{t("attendingCount")}</div>
              <Dropdown
                value={rsvpData.acceptCount}
                maxNum={receptionCountMax}
                onChange={(newAcceptCount) => {
                  setRsvpData((rsvp) => ({
                    ...rsvp,
                    acceptCount: newAcceptCount,
                    declineCount: Math.min(
                      receptionCountMax - newAcceptCount,
                      rsvp.declineCount || 0
                    ),
                    attendeeNames: famNamesCache.slice(0, newAcceptCount),
                    childrenAttendingCount: Math.max(
                      0,
                      Math.min(newAcceptCount - 1, rsvp.childrenAttendingCount)
                    ),
                  }));
                }}
              />
            </div>
            <div className="dropdownRow">
              <div>{t("decliningCount")}</div>
              <Dropdown
                value={rsvpData.declineCount}
                maxNum={receptionCountMax}
                onChange={(newDeclineCount) => {
                  setRsvpData((rsvp) => {
                    const newAcceptCount = Math.min(
                      receptionCountMax - newDeclineCount,
                      rsvp.acceptCount || 0
                    );
                    return {
                      ...rsvp,
                      declineCount: newDeclineCount,
                      acceptCount: newAcceptCount,
                      attendeeNames: famNamesCache.slice(0, newAcceptCount),
                      childrenAttendingCount: Math.max(
                        0,
                        Math.min(
                          Math.min(
                            newAcceptCount - 1,
                            rsvp.childrenAttendingCount
                          )
                        )
                      ),
                    };
                  });
                }}
              />
            </div>
            {
              // @ts-ignore
              auth?.inviteeStatus === "family" && rsvpData.acceptCount >= 2 ? (
                <div className="dropdownRow">
                  <div>{t("childrenAttendingCount")}</div>
                  <Dropdown
                    maxNum={(rsvpData.acceptCount || 1) - 1}
                    value={rsvpData.childrenAttendingCount}
                    onChange={(childrenAttendingCount) =>
                      setRsvpData((rsvp) => ({
                        ...rsvp,
                        childrenAttendingCount,
                      }))
                    }
                  />
                </div>
              ) : (
                <></>
              )
            }
          </div>
        }

        <div style={{ display: "flex", flexDirection: "column" }}>
          {[...Array(rsvpData.acceptCount || 0)].map((_, i) => (
            <input
              className="nameBox"
              type="text"
              key={i}
              value={famNamesCache?.[i] || ""}
              onChange={(e) => {
                setFamNamesCache((names) => {
                  const names_ = [...names];

                  names_[i] = e.target.value;

                  setRsvpData((rsvp) => ({
                    ...rsvp,
                    attendeeNames: names_.slice(0, rsvp.acceptCount),
                  }));
                  return names_;
                });
              }}
              placeholder={t("familyMemberName", { number: i + 1 })}
            />
          ))}
        </div>

        <textarea
          className="receptionText"
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
