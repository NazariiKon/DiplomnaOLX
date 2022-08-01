using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OLX.Migrations
{
    public partial class order : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tblCartEntities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    AdvId = table.Column<int>(type: "INTEGER", nullable: false),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblCartEntities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblCartEntities_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_tblCartEntities_tblAdvertisement_AdvId",
                        column: x => x.AdvId,
                        principalTable: "tblAdvertisement",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tblOrderEntities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblOrderEntities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblOrderEntities_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "tblOrderItemEntities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    OrderId = table.Column<int>(type: "INTEGER", nullable: false),
                    ProductId = table.Column<int>(type: "INTEGER", nullable: false),
                    BuyPrice = table.Column<decimal>(type: "TEXT", nullable: false),
                    AdvertisementId = table.Column<int>(type: "INTEGER", nullable: true),
                    IsDeleted = table.Column<bool>(type: "INTEGER", nullable: false),
                    DateCreated = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tblOrderItemEntities", x => x.Id);
                    table.ForeignKey(
                        name: "FK_tblOrderItemEntities_tblAdvertisement_AdvertisementId",
                        column: x => x.AdvertisementId,
                        principalTable: "tblAdvertisement",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_tblOrderItemEntities_tblOrderEntities_OrderId",
                        column: x => x.OrderId,
                        principalTable: "tblOrderEntities",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_tblCartEntities_AdvId",
                table: "tblCartEntities",
                column: "AdvId");

            migrationBuilder.CreateIndex(
                name: "IX_tblCartEntities_UserId",
                table: "tblCartEntities",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_tblOrderEntities_UserId",
                table: "tblOrderEntities",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_tblOrderItemEntities_AdvertisementId",
                table: "tblOrderItemEntities",
                column: "AdvertisementId");

            migrationBuilder.CreateIndex(
                name: "IX_tblOrderItemEntities_OrderId",
                table: "tblOrderItemEntities",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tblCartEntities");

            migrationBuilder.DropTable(
                name: "tblOrderItemEntities");

            migrationBuilder.DropTable(
                name: "tblOrderEntities");
        }
    }
}
