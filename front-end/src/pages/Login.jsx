import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <section className="flex justify-center items-center p-8">
      <div className="flex flex-col items-center mx-auto max-w-96xl  gap-4">
        <h1 className="text-3xl font-bold">Faça seu Login:</h1>
        <form className="flex flex-col gap-2 w-full">
          <input
            type="email"
            className="border border-gray-300 px-4 py-2 rounded-full w-full"
            placeholder="Digite o seu email"
          />
          <input
            type="password"
            className="border border-gray-300 px-4 py-2 rounded-full w-full"
            placeholder="Digite sua senha"
          />
          <button className="cursor-pointer bg-primary-400 w-full rounded-full border border-gray-300 px-4 py-2 text-white font-bold">
            Login
          </button>
        </form>

        <p>
          Ainda não tem uma conta ?
          <Link to="/register" className="underline font-semibold">
            Registre-se aqui
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
