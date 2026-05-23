import { Box } from "@/app/components/docs/Box";
import { DocsHeader } from "@/app/components/docs/DocsHeader";
import { DocsSidebar } from "@/app/components/docs/DocsSidebar";

type DocsShellProps = Readonly<{
  children: React.ReactNode;
}>;

export function DocsShell({ children }: DocsShellProps) {
  return (
    <>
      <DocsHeader />
      <div className="mx-auto flex w-full max-w-[1440px]">
        <DocsSidebar />
        <main className="min-w-0 flex-1 px-6 py-8 md:px-10 md:py-10">
          <Box className="mx-auto max-w-4xl">{children}</Box>
        </main>
      </div>
    </>
  );
}
