using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OLX.Migrations
{
    public partial class AddCategory : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "tblAdvertisement");

            migrationBuilder.DropColumn(
                name: "Contacts",
                table: "tblAdvertisement");

            migrationBuilder.AddColumn<int>(
                name: "CategoryId",
                table: "tblAdvertisement",
                type: "INTEGER",
                maxLength: 255,
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "tblAdvertisement",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "tblCategory",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Title = table.Column<string>(type: "TEXT", nullable: true),
                    Image = table.Column<string>(type: "TEXT", nullable: true),
                    ParentId = table.Column<int>(type: "INTEGER", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblCategory", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblCategory_tblCategory_ParentId",
                        column: x => x.ParentId,
                        principalTable: "tblCategory",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblAdvertisement_CategoryId",
                table: "tblAdvertisement",
                column: "CategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_tblAdvertisement_UserId",
                table: "tblAdvertisement",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_tblCategory_ParentId",
                table: "tblCategory",
                column: "ParentId");

            migrationBuilder.AddForeignKey(
                name: "FK_tblAdvertisement_AspNetUsers_UserId",
                table: "tblAdvertisement",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_tblAdvertisement_tblCategory_CategoryId",
                table: "tblAdvertisement",
                column: "CategoryId",
                principalTable: "tblCategory",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_tblAdvertisement_AspNetUsers_UserId",
                table: "tblAdvertisement");

            migrationBuilder.DropForeignKey(
                name: "FK_tblAdvertisement_tblCategory_CategoryId",
                table: "tblAdvertisement");

            migrationBuilder.DropTable(
                name: "tblCategory");

            migrationBuilder.DropIndex(
                name: "IX_tblAdvertisement_CategoryId",
                table: "tblAdvertisement");

            migrationBuilder.DropIndex(
                name: "IX_tblAdvertisement_UserId",
                table: "tblAdvertisement");

            migrationBuilder.DropColumn(
                name: "CategoryId",
                table: "tblAdvertisement");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "tblAdvertisement");

            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "tblAdvertisement",
                type: "TEXT",
                maxLength: 255,
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Contacts",
                table: "tblAdvertisement",
                type: "TEXT",
                maxLength: 255,
                nullable: true);
        }
    }
}
