import {MigrationInterface, QueryRunner} from "typeorm";

export class createMembershipTable1638439511656 implements MigrationInterface {
    name = 'createMembershipTable1638439511656'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."membership_name_enum" AS ENUM('GOLD', 'PLATINUM', 'SILVER')`);
        await queryRunner.query(`CREATE TABLE "membership" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" "public"."membership_name_enum" NOT NULL, CONSTRAINT "UQ_bd32c07f4b89a4697d33bd0f7d3" UNIQUE ("name"), CONSTRAINT "PK_83c1afebef3059472e7c37e8de8" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "membership"`);
        await queryRunner.query(`DROP TYPE "public"."membership_name_enum"`);
    }

}
