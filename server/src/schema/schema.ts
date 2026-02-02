import { pgTable, uuid, text, timestamp, boolean } from "drizzle-orm/pg-core";

//user
export const users = pgTable("users", {
  id: uuid("id").defaultRandom().primaryKey(), 

  clerkUserId: text("clerk_user_id")
    .notNull()
    .unique(),                          

  createdAt: timestamp("created_at").defaultNow().notNull(),
});


// notes
export const notes = pgTable("notes", {
  id: uuid("id").defaultRandom().primaryKey(),

  userId: uuid("user_id")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),

  title: text("title").notNull(),
  content: text("content").notNull(),

  isPinned: boolean("is_pinned").default(false).notNull(),
  isArchived: boolean("is_archived").default(false).notNull(),
  isDeleted: boolean("is_deleted").default(false).notNull(),

  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
});