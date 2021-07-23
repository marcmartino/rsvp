import { OutputOf } from "io-ts";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import { AuthData } from "../../queries/constants";
import { rsvpBody } from "../../queries/decoders";
import { Button } from "../Button/Button";

export type ReceptionFormData = NonNullable<
  OutputOf<typeof rsvpBody>["reception"]
>;
/*
type ReceptionFormData = {
    foodPreferences: ("vegetarian" | "pescetarian" | "chicken" | "beef")[];
    attendeeNames: string[];
    childrenAttendingCount: number;
} & {
    acceptCount: number;
    declineCount: number;
    notes: string;
}*/

interface Props {
  auth: AuthData;
  onCancel: () => void;
  onSubmit: (values: ReceptionFormData) => void;
  saving: boolean;
}

export const ReceptionRsvpForm: FC<Props> = ({
  auth,
  onCancel,
  onSubmit,
  saving,
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

  console.log(rsvpData);

  return (
    <form onSubmit={submit}>
      <div style={{ marginTop: 10, marginBottom: 10 }}>
        {
          <div>
            <div>
              <div>
                {t("attendingCount", { count: rsvpData.acceptCount || 0 })}
              </div>
              <input
                type="range"
                min="0"
                max={receptionCountMax}
                step="1"
                value={rsvpData.acceptCount || 0}
                id="acceptCountCouple"
                onChange={(e) => {
                  const newAcceptCount = parseInt(e.target.value, 10);
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
            <div>
              <div>
                {t("decliningCount", { count: rsvpData.declineCount || 0 })}
              </div>
              <input
                type="range"
                min="0"
                max={receptionCountMax}
                step="1"
                value={rsvpData.declineCount || 0}
                onChange={(e) => {
                  const newDeclineCount = parseInt(e.target.value, 10);

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
                <div>
                  <div>
                    {t("childrenAttendingCount", {
                      count: rsvpData.childrenAttendingCount,
                    })}
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={(rsvpData.acceptCount || 1) - 1}
                    step="1"
                    value={rsvpData.childrenAttendingCount}
                    onChange={(e) =>
                      setRsvpData((rsvp) => ({
                        ...rsvp,
                        childrenAttendingCount: parseInt(
                          e.target.value || "0",
                          10
                        ),
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
          value={rsvpData.notes}
          placeholder={t("rsvpForm.notes")}
          onChange={(e) =>
            setRsvpData((rsvp) => ({ ...rsvp, notes: e.target.value }))
          }
        />
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
