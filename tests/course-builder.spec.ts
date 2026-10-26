import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/builder");
  await page.evaluate(() => localStorage.clear());
  await page.reload();
});

test("resource flow validates required title, previews, and saves a draft", async ({ page }) => {
  await page.getByRole("button", { name: /Create resource/i }).first().click().catch(async () => {
    await page.getByRole("button", { name: /Course resource/i }).click();
  });

  await expect(page.getByRole("heading", { name: "Create course resource" })).toBeVisible();
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("alert")).toContainText("Add a clear title for this resource.");

  await page.getByLabel(/Resource title/i).fill("Browser test resource");
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("heading", { name: "Add your content" })).toBeVisible();
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("heading", { name: "Availability & access" })).toBeVisible();
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("heading", { name: "Review your item" })).toBeVisible();
  await expect(page.getByText("Browser test resource")).toBeVisible();

  await page.getByRole("button", { name: /Preview/i }).click();
  await expect(page.getByRole("dialog")).toContainText("Preview your resource");
  await page.getByRole("button", { name: /Back to editing/i }).click();

  await page.getByRole("button", { name: /Save draft/i }).last().click();
  await expect(page.getByRole("status")).toContainText("Draft saved on this device.");
  await expect(page.getByText("Browser test resource")).toBeVisible();
});

test("activity flow validates instructions and points, then publishes", async ({ page }) => {
  await page.getByRole("button", { name: /Learning activity/i }).click();
  await expect(page.getByRole("heading", { name: "Create learning activity" })).toBeVisible();

  await page.getByLabel(/Activity title/i).fill("Browser test assignment");
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("heading", { name: "Activity instructions" })).toBeVisible();
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("alert")).toContainText("Add instructions for learners.");

  await page.getByLabel(/Instructions for learners/i).fill("Complete the short exercise and submit your response.");
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("heading", { name: "Submission settings" })).toBeVisible();
  await page.getByLabel(/Maximum points/i).fill("-1");
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("alert")).toContainText("Points must be zero or greater.");

  await page.getByLabel(/Maximum points/i).fill("20");
  await page.getByRole("button", { name: /Continue/i }).click();
  await expect(page.getByRole("heading", { name: "Review your item" })).toBeVisible();
  await page.getByRole("button", { name: /Publish activity/i }).click();
  await expect(page.getByRole("dialog")).toContainText("Publish this activity?");
  await page.getByRole("button", { name: /Confirm publish/i }).click();
  await expect(page.getByRole("status")).toContainText("Published successfully.");
  await expect(page.getByText("Browser test assignment")).toBeVisible();
  await expect(page.getByText("Published", { exact: true }).last()).toBeVisible();
});

test("saved items persist after a reload", async ({ page }) => {
  await page.getByRole("button", { name: /Course resource/i }).click();
  await page.getByLabel(/Resource title/i).fill("Persistence check resource");
  await page.getByRole("button", { name: /Save draft/i }).last().click();
  await page.reload();
  await expect(page.getByText("Persistence check resource")).toBeVisible();
});

test("Figma portal pages navigate between dashboard, courses, results, and settings", async ({ page }) => {
  await page.goto("/dashboard");
  await expect(page.getByRole("heading", { name: "Dashboard overview" })).toBeVisible();
  await page.getByRole("button", { name: /^Courses$/ }).click();
  await expect(page.getByRole("heading", { name: "My Courses" })).toBeVisible();
  await page.getByRole("button", { name: /^Result$/ }).click();
  await expect(page.getByRole("heading", { name: "Results & transcripts" })).toBeVisible();
  await page.getByRole("button", { name: /^Settings$/ }).click();
  await expect(page.getByRole("heading", { name: "Institution settings" })).toBeVisible();
});

test("marketing homepage links into sign-in and admission flows", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: /Make education work better/i })).toBeVisible();
  await page.getByRole("button", { name: /Log in/i }).click();
  await expect(page.getByRole("heading", { name: "Sign in to InstiServe" })).toBeVisible();
  await page.getByRole("button", { name: /Start an application/i }).click();
  await expect(page.getByRole("heading", { name: "Personal information" })).toBeVisible();
});
