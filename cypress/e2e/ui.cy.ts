describe("first page", () => {
  it("can visit the site", () => {
    cy.visit("/");
    cy.wait(2000);
    localStorage.clear();
  });

  it("can show items correctly in sidebar", () => {
    cy.get("#open-sidebar").click();

    cy.get("a").contains("หน้าหลัก").should("exist");
    cy.get("a").contains("สัตว์เลี้ยง").should("exist");
    cy.get("a").contains("เล่นเกม").should("exist");
    cy.get("a").contains("ดูดวง").should("exist");
    cy.get("a").contains("คำถามที่พบบ่อย").should("exist");
    cy.get("a").contains("เกี่ยวกับเรา").should("exist");
    cy.get("a").contains("รายการที่ชอบ").should("exist");
    cy.get("a").contains("Admin Login").should("exist");
    cy.get("button").contains("Logout").should("not.exist");

    cy.get("#close-sidebar").click();
  });

  it("can navigate to home page", () => {
    cy.get("button").contains("กดดูเลย").should("exist");
    cy.get("button").contains("กดดูเลย").click();
  });
});

describe("home page", () => {
  it("should show carousel", () => {
    cy.get("div.carousel.carousel-slider").should("exist");
  });

  it("should have 8 mini cards", () => {
    cy.get("div.w-40.rounded-2xl.bg-white.shadow-md").should("have.length", 8);
  });

  it("should have pet cards", () => {
    cy.get(
      "div.flex.w-80.flex-col.items-start.justify-start.rounded-2xl.bg-white.p-4.shadow"
    ).should("have.length.at.least", 8);
  });

  it("can navigate to home page", () => {
    cy.get("#open-sidebar").click();
    cy.get("a").contains("สัตว์เลี้ยง").click();
  });
});

describe("pets page", () => {
  it("should have search input", () => {
    cy.get(`input[placeholder="ค้นหาสัตว์เลี้ยง"]`).should("exist");
  });

  it("should have pet cards", () => {
    cy.get(
      "div.flex.w-80.flex-col.items-start.justify-start.rounded-2xl.bg-white.p-4.shadow"
    ).should("have.length.at.least", 8);
  });

  it("should have filter button", () => {
    cy.get("button > svg.iconify--custom").should("exist");
    cy.get("button > svg.iconify--custom").click();
  });

  it("should show filter menu correctly", () => {
    cy.get("button.bg-accent-red")
      .contains("ประเภทสัตว์เลี้ยง")
      .should("exist");
    cy.get("button.bg-accent-red").contains("เพศ").should("exist");
    cy.get("button.bg-accent-red").contains("สี").should("exist");
    cy.get("button.bg-accent-red").contains("อายุ").should("exist");
  });

  it("can navigate to pet detail page", () => {
    cy.get(
      "div.flex.w-80.flex-col.items-start.justify-start.rounded-2xl.bg-white.p-4.shadow"
    )
      .first()
      .click();
  });
});
