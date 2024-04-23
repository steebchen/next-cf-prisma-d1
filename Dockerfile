FROM node:20.12.2-alpine

RUN apk add --no-cache tini curl python3
ENTRYPOINT ["/sbin/tini", "--"]

RUN curl -fsSL "https://github.com/pnpm/pnpm/releases/download/v$(cat .tool-versions | grep 'pnpm' | cut -d ' ' -f 2)/pnpm-linuxstatic-x64" -o /bin/pnpm; chmod +x /bin/pnpm;

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile && pnpm store prune

COPY . .
ENV CI=true
RUN npm run build

CMD ["npm", "run", "start"]
