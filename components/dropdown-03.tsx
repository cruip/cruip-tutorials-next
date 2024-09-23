import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default function Dropdown03() {
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
              <span className="flex items-center gap-3">
                <svg
                  className="shrink-0 text-slate-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M11.707 2.879a3 3 0 0 1 4.243 0L17.12 4.05a3 3 0 0 1 0 4.243l-.549.549a1 1 0 1 1-1.414-1.414l.55-.55a1 1 0 0 0 0-1.413l-1.172-1.172a1 1 0 0 0-1.415 0l-8.2 8.2-.646 3.232 3.232-.646.946-.946a1 1 0 0 1 1.414 1.414l-1.16 1.16a1 1 0 0 1-.51.274l-5 1a1 1 0 0 1-1.178-1.177l1-5a1 1 0 0 1 .274-.511l8.414-8.414ZM5.25 6.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm9.902 5.321 1.444.542a.645.645 0 0 1 0 1.206l-1.444.542-.542 1.444a.644.644 0 0 1-1.206 0l-.542-1.444-1.444-.542a.645.645 0 0 1 0-1.206l1.444-.542.542-1.443c.188-.504 1.018-.504 1.206 0l.542 1.443Z" />
                </svg>
                Go Pro
              </span>
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
              <span className="flex items-center gap-3">
                <svg
                  className="shrink-0 text-slate-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M12 5.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM13.5 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM5 8.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM6.5 5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm7 7c-.763 0-1.466.243-2.04.657a1 1 0 0 1-1.17-1.624 5.502 5.502 0 0 1 8.396 2.633 1 1 0 1 1-1.885.667 3.502 3.502 0 0 0-3.3-2.333ZM3.2 17.333a3.502 3.502 0 0 1 6.603 0 1 1 0 1 0 1.886-.666 5.502 5.502 0 0 0-10.374 0 1 1 0 1 0 1.886.666Z" />
                </svg>
                Invite friends
              </span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className={separatorClassName} />
          <DropdownMenu.Group>
            <DropdownMenu.Item className={itemClassName}>
              <span className="flex items-center gap-3">
                <svg
                  className="shrink-0 text-slate-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M10 2a8 8 0 0 0-8 8c0 1.4.365 2.712.995 3.853l-.944 2.83a1 1 0 0 0 1.265 1.266l2.83-.944A7.947 7.947 0 0 0 10 18a8 8 0 1 0 0-16Zm-6 8a6 6 0 1 1 6 6 5.962 5.962 0 0 1-3.202-.933 1 1 0 0 0-.851-.104l-1.366.456.456-1.366a1 1 0 0 0-.104-.85A5.962 5.962 0 0 1 4 10Zm4.511 1.334a1 1 0 1 0-1.49 1.333A3.992 3.992 0 0 0 10 14c1.184 0 2.251-.516 2.982-1.333a1 1 0 0 0-1.49-1.333c-.368.41-.9.666-1.491.666a1.992 1.992 0 0 1-1.49-.666Z" />
                </svg>
                Feedback
              </span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClassName}>
              <span className="flex items-center gap-3">
                <svg
                  className="shrink-0 text-slate-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M9.218 2.972A1 1 0 0 1 8.5 4.189a6.003 6.003 0 0 0 0 11.623 1 1 0 0 1-.498 1.936A8.003 8.003 0 0 1 8 2.253a1 1 0 0 1 1.217.719Zm7.812 7.812a1 1 0 0 1 .719 1.218 8.012 8.012 0 0 1-5.75 5.747 1 1 0 0 1-.498-1.937 6.013 6.013 0 0 0 4.311-4.31 1 1 0 0 1 1.218-.718ZM12 2.253a1 1 0 0 0-.499 1.936 6.013 6.013 0 0 1 4.306 4.293 1 1 0 1 0 1.935-.504A8.012 8.012 0 0 0 12 2.253Z" />
                </svg>
                Manage account
              </span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
          <DropdownMenu.Separator className={separatorClassName} />
          <DropdownMenu.Group>
            <DropdownMenu.Item className={itemClassName}>
              <span className="flex items-center gap-3">
                <svg
                  className="shrink-0 text-slate-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path
                    d="M11 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm1.5-3.5A3.502 3.502 0 0 1 15.855 5H17a1 1 0 1 1 0 2h-1.145a3.502 3.502 0 0 1-6.71 0H3a1 1 0 0 1 0-2h6.145A3.502 3.502 0 0 1 12.5 2.5Zm-5 8a3.502 3.502 0 0 1 3.355 2.5H17a1 1 0 1 1 0 2h-6.145a3.502 3.502 0 0 1-6.71 0H3a1 1 0 1 1 0-2h1.145A3.502 3.502 0 0 1 7.5 10.5ZM6 14a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0Z"
                    fillRule="evenodd"
                  />
                </svg>
                Preferences
              </span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClassName}>
              <span className="flex items-center gap-3">
                <svg
                  className="shrink-0 text-slate-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M10 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3 1a3.001 3.001 0 0 1-2 2.83v8.087a6.008 6.008 0 0 0 4.742-4.17l-.295.147a1 1 0 1 1-.894-1.788l2-1A1 1 0 0 1 18 10a8 8 0 1 1-16 0 1 1 0 0 1 1.447-.894l2 1a1 1 0 1 1-.894 1.788l-.295-.147A6.008 6.008 0 0 0 9 15.917V7.829A3.001 3.001 0 1 1 13 5Z" />
                </svg>
                Help center
              </span>
            </DropdownMenu.Item>
            <DropdownMenu.Item className={itemClassName}>
              <span className="flex items-center gap-3">
                <svg
                  className="shrink-0 text-slate-400 fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                >
                  <path d="M7.707 5.293a1 1 0 0 1 0 1.414L4.414 10l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0Z" />
                  <path d="m12.515 5.858 2.728-1.637a.5.5 0 0 1 .757.428V15.35a.5.5 0 0 1-.757.429l-2.728-1.637a1 1 0 0 0-1.03 1.715l2.729 1.637c1.666 1 3.786-.2 3.786-2.144V4.65c0-1.944-2.12-3.144-3.786-2.144l-2.728 1.637a1 1 0 1 0 1.029 1.715ZM3 9a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2H3Z" />
                </svg>
                Log out
              </span>
            </DropdownMenu.Item>
          </DropdownMenu.Group>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
