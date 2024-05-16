import NextAuth from "next-auth";
import Providers from "next-auth/providers";

// Добавьте этот код в файл [...nextauth].js в папке pages/api/auth
export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Здесь должна быть логика аутентификации пользователя
        // Например, запрос к вашему API для проверки учетных данных
        const user = { id: 1, name: "User", email: "user@example.com" };
        if (user) {
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      }
    })
  ],
  session: {
    jwt: true
  },
  jwt: {
    secret: "SECRET_KEY", // Замените SECRET_KEY на ваш секретный ключ
    encryption: true
  },
  callbacks: {
    jwt: async (token, user) => {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: async (session, token) => {
      session.user.id = token.id;
      return session;
    }
  }
});

// В вашем компоненте ModalWindowAuthori измените обработчик отправки формы
const handleSubmit = async (e) => {
  e.preventDefault();
  // Используйте signIn из next-auth/client для отправки учетных данных
  const res = await signIn('credentials', {
    redirect: false,
    email,
    password
  });

  if (res.error) {
    // Обработка ошибки авторизации
    console.error("Authorization error:", res.error);
  } else {
    // Обработка успешной авторизации
    console.log("Authorization successful:", res);
    // Вы можете перенаправить пользователя или выполнить другие действия
  }
};
