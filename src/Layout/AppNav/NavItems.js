export const MainNav = [
  {
    icon: "pe-7s-home",
    label: "Home",
    to: "#/home",
  },
];
export const SystemSettings = [
  {
    icon: "pe-7s-config",
    label: "System Settings",
    content: [
      {
        label: "Role Management",
        to: "#/system/role-management",
      },
      {
        label: "Administrator Management",
        to: "#/system/administrator-management",
      },
    ],
  },
];
export const ManagementNav = [
  {
    icon: "pe-7s-tools",
    label: "Member Management",
    content: [
      {
        label: "Member List",
        to: "#/management/member-list",
      },
      {
        label: "Transfer List",
        to: "#/management/transfer-list",
      },
    ],
  },
  {
    icon: "pe-7s-note",
    label: "Report Management",
    content: [
      {
        label: "Daily Report Management",
        to: "#/management/daily-report-management",
      },
      {
        label: "Monthly Report Management",
        to: "#/management/monthly-report-management",
      },
    ],
  },
];

export const OrdersNav = [
  {
    icon: "pe-7s-graph2",
    label: "Orders Inquiry",
    to: "#/orders/inquiry",
  },
];
