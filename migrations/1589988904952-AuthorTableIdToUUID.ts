import {MigrationInterface, QueryRunner} from "typeorm";

export class AuthorTableIdToUUID1589988904952 implements MigrationInterface {
    name = 'AuthorTableIdToUUID1589988904952'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author" DROP CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "id" uuid NOT NULL DEFAULT uuid_generate_v4()`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "author" DROP CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "id"`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD "id" SERIAL NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "author" ADD CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id")`, undefined);
    }

}
