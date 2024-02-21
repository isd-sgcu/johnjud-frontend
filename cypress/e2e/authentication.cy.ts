describe("authentication", () => {
  it("can visit the site", () => {
    cy.visit("/");
    cy.wait(2000);
    localStorage.clear();
  });

  it("can open sidebar", () => {
    cy.get("#open-sidebar").click();
  });

  it("can navigate to login page", () => {
    cy.get("a").contains("Admin Login").click();

    cy.wait(1000);
    cy.url().should("include", "/admin");
    cy.get("h1").contains("เข้าสู่ระบบ");
  });

  it("can login", () => {
    cy.wait(2000);
    cy.get(`input[name="email"]`).type("admin@gmail.com");
    cy.get(`input[name="password"]`).type("12345678");
    cy.get("button").contains("เข้าสู่ระบบ").click();

    cy.wait(2000);
    cy.url().should("include", "/admin/pets");
    cy.get("#open-sidebar").click();
    cy.get("button").contains("Logout").should("exist");
  });

  it("can logout", () => {
    cy.get("button").contains("Logout").click();

    cy.wait(1000);
    cy.url().should("include", "/admin");
  });

  it("can navigate to forget password page", () => {
    cy.get("a").contains("ลืมรหัสผ่าน?").click();

    cy.wait(1000);
    cy.url().should("include", "/admin/forget-password");
    cy.get("h1").contains("ลืมรหัสผ่าน?");
  });

  it("can request forget password", () => {
    cy.get(`input[name="email"]`).type("admin@gmail.com");
    cy.get("button").contains("รีเซตรหัสผ่าน").click();

    cy.wait(1000);
    cy.get("h2").contains("อีเมลรีเซ็ตถูกส่งแล้ว").should("exist");
    cy.get("button").contains("กลับไปหน้าเข้าสู่ระบบ").click();

    cy.wait(1000);
    cy.url().should("include", "/admin");
  });
});
