// __tests__/services/notificationsService.test.ts
import { sendPushNotification } from "../../src/services/notificationsService";
import admin from "firebase-admin";

describe("Notifications Service", () => {
  it("should send notification successfully", async () => {
    const mockSend = jest.fn().mockResolvedValue({ success: true });
    jest.spyOn(admin.messaging(), "send").mockImplementation(mockSend);

    const result = await sendPushNotification(
      "Test Title",
      "Test Body",
      "Test Screen"
    );

    expect(result.success).toBe(true);
    expect(mockSend).toHaveBeenCalled();
  });

  it("should handle notification errors", async () => {
    const mockSend = jest.fn().mockRejectedValue(new Error("Send failed"));
    jest.spyOn(admin.messaging(), "send").mockImplementation(mockSend);

    try {
      await sendPushNotification("Test Title", "Test Body", "Test Screen");
    } catch (error) {
      expect(error).toBeDefined();
    }
  });
});
