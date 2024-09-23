import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Dropdown02() {
  const itemClassName =
    "relative flex cursor-default select-none items-center rounded-sm px-4 py-2 text-sm outline-none transition-colors focus:bg-slate-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50";
  const separatorClassName = "-mx-1 my-1 h-px bg-slate-200";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="inline-flex items-center justify-center whitespace-nowrap rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-300 disabled:pointer-events-none disabled:opacity-50 border border-slate-300 bg-white shadow-sm hover:bg-slate-50 text-slate-500 hover:text-slate-600 h-9 w-9">
        <svg
          className="fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
        >
          <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM3.5 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
        </svg>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[12rem] overflow-hidden rounded-lg border border-slate-200 bg-white py-1 text-slate-800 shadow-xl shadow-black/[.08] data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
          align="end"
          sideOffset={12}
        >
          <DropdownMenu.Group>
            <DropdownMenu.Item className={itemClassName}>
              Go Pro
              <span className="ml-auto text-slate-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <path
                    className="fill-current"
                    d="M4.776 11.626 4 10.851l5.767-5.777H5.313L5.322 4h6.293v6.304h-1.083l.01-4.455-5.767 5.777Z"
                  />
                </svg>
              </span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClassName}>
              Invite friends
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className={separatorClassName} />
          <DropdownMenu.Group>
            <DropdownMenu.Item className={itemClassName}>
              Feedback
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClassName}>
              Manage account
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className={separatorClassName} />
          <DropdownMenu.Group>
            <DropdownMenu.Item className={itemClassName}>
              Preferences
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClassName}>
              Help center
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClassName}>
              Log out
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
