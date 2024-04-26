import { TaskTypes } from "../pages/Admin/AdminDashboard";

export const adminData:TaskTypes[] = [
    {
      title: "Implement new feature",
      description:
        "We need to add a new feature to our product that allows users to customize their settings.",
      image: null,
      videoWithPreview: "https://example.com/video-preview.mp4",
      createdDate: "24 May 2024",
      manager: "jane.smith",
      priority: "high",
    },
    {
      title: "Fix critical bug",
      description:
        "There is a critical bug in our application that causes data loss.",
      image: null,
      videoWithPreview: null,
      createdDate: "10 May 2024",
      manager: "bob.johnson",
      priority: "high",
    },
    {
      title: "Redesign landing page",
      description:
        "Our landing page needs a fresh look and feel. We should work on a new design ",
      image: "https://example.com/landing-page-mockup.jpg",
      videoWithPreview: null,
      createdDate: "24 May 2024",
      manager: "Jone.doe",
  
      priority: "normal",
    },
    {
      title: "Prepare quarterly report",
      description:
        "We need to prepare the quarterly report for the management team.",
      image: null,
      videoWithPreview: null,
      createdDate: "24 May 2024",
      manager: "john.doe",
      priority: "low",
    },
  ];