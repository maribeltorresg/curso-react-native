import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
  password: string;
};

export const FormsPage = () => {
  const { register, handleSubmit, /*watch*/ } = useForm<FormInputs>({
    defaultValues: {
      email: "test@gmail.com",
      password: "123456",
    },
  });

  const onSubmit = (myForm: FormInputs) => {
    console.log({myForm});
  }
  // console.log(watch('email'));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="mb-4 text-2xl">Formularios</h3>
      <div className="w-lg flex flex-col gap-2">
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-xl border border-gray-300"
          {...register('email', {required: true})}
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 rounded-xl border border-gray-300"
          {...register('password', {required: true})}
        />
        <button className="px-3 py-2 bg-amber-500 rounded-xl w-sm mx-auto">
          Ingresar
        </button>
      </div>
    </form>
  );
};
