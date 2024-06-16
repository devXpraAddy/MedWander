-- CreateTable
CREATE TABLE "Form" (
    "id" SERIAL NOT NULL,
    "formType" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,

    CONSTRAINT "Form_pkey" PRIMARY KEY ("id")
);
