# Contributing to Portfolio

## Development Setup

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Code Standards

- Follow the established ESLint and Prettier configurations
- Write meaningful commit messages using conventional commits
- Add tests for new features
- Update documentation as needed

## Pull Request Process

1. Create a feature branch from `main`
2. Make your changes
3. Run quality checks: `npm run quality`
4. Submit a pull request with the provided template
5. Ensure all CI checks pass
