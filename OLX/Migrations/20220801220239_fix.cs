using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OLX.Migrations
{
    public partial class fix : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrderItemEntities_tblAdvertisement_AdvertisementId",
                table: "tblOrderItemEntities");

            migrationBuilder.DropColumn(
                name: "ProductId",
                table: "tblOrderItemEntities");

            migrationBuilder.AlterColumn<int>(
                name: "AdvertisementId",
                table: "tblOrderItemEntities",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrderItemEntities_tblAdvertisement_AdvertisementId",
                table: "tblOrderItemEntities",
                column: "AdvertisementId",
                principalTable: "tblAdvertisement",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblOrderItemEntities_tblAdvertisement_AdvertisementId",
                table: "tblOrderItemEntities");

            migrationBuilder.AlterColumn<int>(
                name: "AdvertisementId",
                table: "tblOrderItemEntities",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddColumn<int>(
                name: "ProductId",
                table: "tblOrderItemEntities",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_tblOrderItemEntities_tblAdvertisement_AdvertisementId",
                table: "tblOrderItemEntities",
                column: "AdvertisementId",
                principalTable: "tblAdvertisement",
                principalColumn: "Id");
        }
    }
}
