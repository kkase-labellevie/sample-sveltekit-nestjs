CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"job" varchar(100) NOT NULL,
	"bio" text
);
