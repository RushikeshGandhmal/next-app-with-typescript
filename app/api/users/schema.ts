import { TypeOf, object, string } from "zod";

const createUserSchema = object({
  body: object({
    firstName: string({
      required_error: "First name is required",
    }),
    lastName: string({
      required_error: "Last name is required",
    })
      .trim()
      .min(1),
    password: string({
      required_error: "Password is required",
    })
      .trim()
      .min(6, "Password too short - should be 6 chars minimum"),
    passwordConfirmation: string({
      required_error: "Confirm password is required",
    }),
    email: string({
      required_error: "Email is required",
    })
      .email("Not a valid required")
      .trim()
      .min(1),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: "Password do not match",
    path: ["passwordConfirmation"],
  }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

export interface UserInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
}

export default createUserSchema;
