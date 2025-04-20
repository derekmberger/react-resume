# ---------- builder: install deps & build ----------
    FROM node:22-alpine AS builder
    WORKDIR /app

    # 1) install ALL deps (dev + prod) and build
    COPY package.json yarn.lock ./
    RUN yarn install --frozen-lockfile
    COPY . .
    RUN yarn build

    # ---------- runner: Alpine Node.js w/ PROD only ----------
    FROM node:22-alpine AS runner
    WORKDIR /app
    ENV NODE_ENV=production

    # 2) install ONLY prod deps & clean cache
    COPY package.json yarn.lock ./
    RUN yarn install --production --frozen-lockfile --ignore-optional \
        && yarn cache clean
    COPY --from=builder /app/.next       ./.next
    COPY --from=builder /app/public      ./public
    COPY --from=builder /app/next.config.js ./

    EXPOSE 3000
    CMD ["npx", "next", "start", "-p", "3000"]
