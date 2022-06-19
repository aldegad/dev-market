import { FieldErrors, useForm } from "react-hook-form";
import { cls } from "@libs/client/utils";

// Less code
// Better validation
// Better Erros (set, clear, display)
// hav control over inputs
// Dont deal with events
// Easier Inputs

interface LoginForm {
  username:string;
  password:string;
  email:string;
  errors?:string;
}

export default function Forms() {
  const { register, handleSubmit, formState: { errors }, setValue, setError, resetField, watch } = useForm<LoginForm>({
    mode: "onChange"
  });
  const onValid = (data:LoginForm) => {
    console.log("🚀 Valid Form");
    setError("errors", {message: "Backend is offline sorry"});
  }
  const onInvalid = (errors: FieldErrors) => {
    console.log("❌ Invalid Form", errors);
  }
  console.log(errors);

  return ( 
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="flex flex-col space-y-2 p-10 max-w-lg mx-auto">
      <input 
        className="rounded-md" 
        {...register("username", {
          required: "Username is required",
          minLength: {
            message: "The username should be longer than 5 chars.",
            value: 5
          }
        })}
        type="text" 
        placeholder="Username"
      />
      { errors.username?.message }
      <input 
        className={cls("rounded-md", errors.email?.message ? "border-red-500" : "")}
        {...register("email", {
          required: "Email is required",
          validate: {
            notGmail: (value) => !value.includes("@gmail.com") || "Gmail is not allowed"
          }
        })}
        type="email" 
        placeholder="Email"
      />
      { errors.email?.message }
      <input 
        className="rounded-md" 
        {...register("password", { 
          required: "Password is required" 
        })} 
        type="password" 
        placeholder="Password"
      />
      { errors.password?.message }
      <input type="submit" value="Create Account"/>
      { errors.errors?.message }
    </form>
  )
}