Design a modern, clean, professional Admin Dashboard Web UI for a Painter Rewards Management Platform.

The system manages painters, paint shops, QR codes, points, and reward gifts.

This UI will be used by Shop Owners (Admins).

IMPORTANT RULES
• First screen must be a Get Started page
• When admin clicks "Get Started", navigate to Login Screen
• Do NOT include any signup screen
• Admin accounts are created by Super Admin only

Design must feel:
• Professional
• Clean
• Data-driven
• Dashboard oriented
• Easy to manage large data

Color style:
• Light theme
• Paint industry feel
• Primary color: Deep Blue or Orange
• Secondary: Soft gray

PAGES TO DESIGN

Get Started Page

App logo

Title: Painter Rewards System

Short description

Button: "Get Started"

Login Page

Email

Password

Login button

Remember me

Forgot password

Dashboard

KPI Cards

Total Painters

Total Points Issued

QR Codes Scanned Today

Rewards Redeemed

Activity chart

Recent scans table

Painters Management

Table listing painters

Add painter

Edit painter

Painter points balance

Search & filter

QR Code Management

Upload QR codes

QR code status

Bucket ID

Points value

Points Transactions

Table of all scans

Painter name

QR code

Points earned

Date/time

Rewards / Gifts

Gift catalog

Add gift

Points required

Gift stock

Reward Claims

Pending claims

Approved claims

Claim history

Shop Profile

Shop info

Owner details

Contact info

Settings

Change password

Notification settings

COMPONENTS

Sidebar navigation

Top header

Data tables

KPI cards

Charts

Modal forms

Search filters

REACT JS JSX FOLDER STRUCTURE

src/
├── components/
│ ├── Sidebar.jsx
│ ├── Header.jsx
│ ├── KPIBox.jsx
│ ├── DataTable.jsx
│ ├── ChartCard.jsx
│ └── ModalForm.jsx
│
├── pages/
│ ├── GetStarted/
│ │ └── GetStartedPage.jsx
│ ├── Auth/
│ │ └── LoginPage.jsx
│ ├── Dashboard/
│ │ └── DashboardPage.jsx
│ ├── Painters/
│ │ ├── PainterList.jsx
│ │ └── PainterForm.jsx
│ ├── QRcodes/
│ │ ├── QRList.jsx
│ │ └── QRUpload.jsx
│ ├── Points/
│ │ └── PointsTransactions.jsx
│ ├── Rewards/
│ │ ├── RewardsList.jsx
│ │ └── RewardForm.jsx
│ ├── Claims/
│ │ └── RewardClaims.jsx
│ └── Settings/
│ └── SettingsPage.jsx
│
├── layouts/
│ └── AdminLayout.jsx
│
├── services/
│ └── api.js
│
├── routes/
│ └── AppRoutes.jsx
│
├── App.jsx
└── main.jsx

Design style inspiration:
• Modern SaaS dashboard
• Clean admin UI
• Similar to Stripe / Linear dashboards