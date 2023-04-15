import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "@/server/api/trpc";

export const postsRouter = createTRPCRouter({
  createPost: protectedProcedure
    .input(
      z.object({
        authorId: z.string(),
        title: z.string(),
        attachment: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      await ctx.prisma.post.create({
        data: {
          title: input.title,
          content: input.attachment,
          authorId: input.authorId,
        },
      });
    }),
});
