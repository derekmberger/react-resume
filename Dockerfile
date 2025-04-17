# ---------- builder: install everything & build ----------
FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g yarn@1.22.19 --force
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Carve out prod‑only modules into /app/prod_node_modules
RUN yarn install --production --frozen-lockfile --modules-folder /app/prod_node_modules

# ---------- runner: just copy built output + prod modules ----------
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/prod_node_modules ./node_modules
EXPOSE 3000
CMD ["npx", "next", "start", "-p", "3000"]
