import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";

// Check if required environment variables are present
const hasRequiredEnvVars = () => {
  return (
    process.env.KINDE_ISSUER_URL &&
    process.env.KINDE_CLIENT_ID &&
    process.env.KINDE_CLIENT_SECRET
  );
};

// Only export the handler if environment variables are present
export const GET = hasRequiredEnvVars()
  ? handleAuth()
  : async () => {
      return new Response("Authentication not configured", { status: 501 });
    };
