# Bank Dash 🏦

A modern, feature-rich banking dashboard application built with Next.js 15, TypeScript, and Tailwind CSS. Bank Dash provides a comprehensive interface for managing finances, credit cards, and investments with beautiful data visualizations and an intuitive user experience.

## ✨ Features

### 📊 Dashboard (Home)

- **My Cards**: Display and manage multiple credit/debit cards with card details
- **Recent Transactions**: View recent financial transactions with merchant information
- **Weekly Activity**: Bar chart visualization showing deposit and withdraw patterns
- **Expense Statistics**: Pie chart breakdown of spending by category
- **Quick Transfer**: Fast money transfer interface with contact list
- **Balance History**: Line chart tracking account balance over time

### 💳 Credit Cards

- **Credit Card List**: Visual display of all credit cards (front and back views)
- **Card Expense Statistics**: Semi-circle pie chart showing card spending breakdown
- **Card List**: Detailed table view of all cards with bank information
- **Add New Card**: Form to add new credit cards with auto-formatting for expiration dates
- **Card Settings**: Quick access to card management options (block card, change PIN, add to digital wallets)

### 📈 Investments

- **Investment Statistics**: Three stat cards showing total invested amount, number of investments, and rate of return
- **Yearly Total Investment**: Line chart tracking investment performance over 12 months
- **Monthly Revenue**: Line chart displaying revenue trends throughout the year
- **My Investment**: Portfolio view with individual investment cards (Apple, Google, Tesla stocks)
- **Trending Stock**: Table showing current trending stocks with SL No, Name, and Price

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Charts**: [Recharts](https://recharts.org/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Icons
- **Font**: [Inter](https://fonts.google.com/specimen/Inter) via next/font

## 📁 Project Structure

```
bank-dash/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with sidebar & header
│   ├── page.tsx                 # Dashboard home page
│   ├── credit-cards/            # Credit cards page
│   └── investments/             # Investments page
├── components/
│   ├── Dashboard/               # Dashboard page components
│   │   ├── BalanceHistory.tsx
│   │   ├── ExpenseStatistics.tsx
│   │   ├── MyCards.tsx
│   │   ├── QuickTransfer.tsx
│   │   ├── RecentTransactions.tsx
│   │   └── WeeklyActivity.tsx
│   ├── CreditCards/             # Credit cards page components
│   │   ├── AddNewCard.tsx
│   │   ├── CardExpenseStatistics.tsx
│   │   ├── CardList.tsx
│   │   ├── CardSetting.tsx
│   │   └── CreditCardList.tsx
│   ├── Investments/             # Investments page components
│   │   ├── InvestmentStatCard.tsx
│   │   ├── MonthlyRevenue.tsx
│   │   ├── MyInvestment.tsx
│   │   ├── MyInvestmentCard.tsx
│   │   ├── TrendingStock.tsx
│   │   └── YearlyTotalInvestment.tsx
│   ├── Layout/                  # Layout components
│   │   ├── Header.tsx
│   │   └── SidePanel.tsx
│   ├── icons/                   # Custom icon components
│   └── ui/                      # shadcn/ui components
├── constants/
│   ├── colors.ts                # Centralized color palette
│   └── index.ts
├── data/                        # Data collections (mock data)
│   ├── activity.ts              # Weekly activity & balance history
│   ├── cards.ts                 # Card data
│   ├── contacts.ts              # Quick transfer contacts
│   ├── credit-cards.ts          # Credit card related data
│   ├── investments.ts           # Investment holdings & stats
│   ├── statistics.ts            # Expense statistics
│   ├── transactions.ts          # Transaction history
│   └── index.ts                 # Central export
└── lib/
    └── utils.ts                 # Utility functions
```

## 🎨 Design System

### Color Palette

The app uses a centralized color system defined in `constants/colors.ts`:

- **Primary**: Various shades for main UI elements
- **Secondary**: Supporting colors
- **Semantic Colors**: Success (green), warning (amber), info (blue)
- **Pale Colors**: Soft backgrounds for cards and highlights

### Component Architecture

- **Data-Driven**: All components consume data from external files in the `data/` directory
- **Reusable**: Built with composition and reusability in mind
- **Type-Safe**: Full TypeScript support with proper typing
- **Accessible**: Using Radix UI primitives for accessibility

### Styling Approach

- **Utility-First**: Tailwind CSS for all styling
- **No Inline Styles**: Consistent use of Tailwind classes
- **Custom Rounded Corners**: Cards use `rounded-[25px]` for a modern look
- **Responsive**: Mobile-first responsive design with breakpoints

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended), npm, or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd bank-dash
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
# or
yarn install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 📊 Data Structure

All application data is organized in the `data/` directory with separate files for each data collection:

- **activity.ts**: Weekly activity data, balance history
- **cards.ts**: Credit/debit card information
- **contacts.ts**: Quick transfer contact list
- **credit-cards.ts**: Credit card lists, transactions, settings
- **investments.ts**: Investment holdings, yearly data, stock information
- **statistics.ts**: Expense breakdown statistics
- **transactions.ts**: Recent transaction history

Each data file exports typed constants that can be imported throughout the application.

## 🎯 Key Features & Functionality

### Dashboard

- Real-time balance tracking
- Visual analytics with multiple chart types
- Quick money transfer functionality
- Transaction history overview

### Credit Cards Management

- Visual card display with gradients
- Expense tracking and categorization
- Easy card addition workflow
- Integrated digital wallet support (Apple Pay, Google Pay)
- Card security settings

### Investment Portfolio

- Portfolio overview with key metrics
- Historical performance tracking
- Individual investment details
- Trending stocks monitoring

## 🔧 Customization

### Adding New Data

Add or modify data in the respective files in the `data/` directory. All components automatically consume the updated data.

### Modifying Colors

Update the color palette in `constants/colors.ts` to match your brand:

```typescript
export const COLORS = {
  primary2: "#343C6A",
  primary3: "#718EBF",
  // ... add or modify colors
};
```

### Adding New Pages

Create new route directories in the `app/` folder following Next.js App Router conventions.

## 📱 Responsive Design

Bank Dash is fully responsive with breakpoints for:

- Mobile (< 640px)
- Tablet (640px - 1024px)
- Desktop (> 1024px)

The layout adapts with collapsible sidebar and responsive grid layouts.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Charts powered by [Recharts](https://recharts.org/)
- Icons from [Lucide](https://lucide.dev/)
