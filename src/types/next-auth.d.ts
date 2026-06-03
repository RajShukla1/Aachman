import "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: string;
    businessId: string | null;
  }

  interface Session {
    user: User & {
      id: string;
      role: string;
      businessId: string | null;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: string;
    businessId: string | null;
  }
}
