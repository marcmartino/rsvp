import {
  Type,
  TypeOf,
  partial,
  number,
  intersection,
  type,
  string,
  array,
  union,
  boolean,
  OutputOf,
  literal,
} from "io-ts";

export const authorizeUserDecoder = intersection([
  intersection([
    type({
      zip: string,
      weddingAccess: boolean,
      receptionAccess: boolean,
    }),
    type({
      displayName: string,
      recordName: string,
      id: number,
    }),
    union([
      type({}),
      type({
        familyName: string,
        familyNames: array(string),
        familyKey: string,
      }),
      type({ soName: string, familyKey: string }),
    ]),
  ]),

  partial({
    weddingAcceptedCount: number,
    weddingDeclinedCount: number,
    receptionAcceptedCount: number,
    receptionDeclinedCount: number,
  }),
]);

const rsvpDecoder = type({
  acceptCount: number,
  declineCount: number,
  notes: string,
});

const rsvpVenueDecoder = partial({
  wedding: rsvpDecoder,
  reception: intersection([
    type({
      foodPreferences: array(
        union([
          literal("vegetarian"),
          literal("pescetarian"),
          literal("chicken"),
          literal("beef"),
        ])
      ),
      attendeeNames: array(string),
      childrenAttendingCount: number,
    }),
    rsvpDecoder,
  ]),
});

const userAuthBody = type({ name: string, zip: string });

export const rsvpBody = intersection([
  rsvpVenueDecoder,
  userAuthBody,
  partial({ familyName: string }),
]);
