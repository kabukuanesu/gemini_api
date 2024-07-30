"use client";

import Link from "@mui/material/Link";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import * as React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { destroyCookie } from "nookies";

type Props = {
  pageName: string;
};

export default function NavBar({ pageName }: Props) {
  const router = useRouter();

  const [loggedInUser, setLoggedInUser] = useState<string>();
  const [loggingOutUser, setLoggingOutUser] = useState<string>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedLoggedInUser = localStorage.getItem("loggedInUsername");

      if (storedLoggedInUser) {
        setLoggingOutUser(trimAndCapitalize(storedLoggedInUser));
        setLoggedInUser(storedLoggedInUser);
      }
    }
  }, []);

  function trimAndCapitalize(str) {
    // Split the string based on the dot character
    const parts = str.split(".");

    // Get the substring after the dot and capitalize the first letter
    const trimmedPart = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);

    return trimmedPart;
  }

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const logOut = () => {
    setOpenDialog(false);
    destroyCookie(null, "jwtToken");
    // destroyCookie(null, 'loggedInUsername');
    //localStorage.clear()
    router.push("/login");
  };
  return (
    <>
      <div
        className={
          "w-auto mb-5 bg-gradient-to-r from-gray-800 to-gray-800 drop-shadow-lg rounded-lg"
        }
      >
        <div className="grid grid-cols-2 p-3 gap-4 text-white">
          <div className="grid grid-rows-1 gap-1">
            <div className="flex justify-start gap-2 ml-1 text-lg">
              <div className={"text-gray-300"}>
                <a href={"/home-page"}>SKIN CANCER DETECTOR DASHBOARD</a> /
              </div>

              <div className={"font-bold"}>{pageName}</div>
            </div>
          </div>

          <div className="flex justify-end gap-5 font-bold text-xl">
            {/*<div>TBA</div>*/}
            <div>
              <Link href="/settings">
                <SettingsIcon className={"text-white"} />
              </Link>
            </div>
            <div>{loggedInUser}</div>

            <div>
              {/*<IconButton onClick={handleClickOpen}>*/}
              <LogoutIcon onClick={handleClickOpen} />
              {/*</IconButton>*/}
            </div>
          </div>
        </div>
      </div>

      {/*SIGN OUT CONFIRMATION SECTION*/}

      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirmation"}</DialogTitle>
        <DialogContent>
          <p className={"text-black text-xl"}>
            {" "}
            Hie {loggingOutUser}, are you sure you want to log out?
          </p>
        </DialogContent>
        <DialogActions>
          <button
            className={
              "bg-indigo-600 hover:bg-gray-800 text-white w-1/3 h-10 rounded font-bold"
            }
            onClick={handleClose}
          >
            NO
          </button>
          <div className={"w-1/3"}></div>
          <button
            className={
              "bg-indigo-600 hover:bg-gray-800 text-white w-1/3 h-10 rounded font-bold"
            }
            onClick={logOut}
            autoFocus
          >
            YES
          </button>
        </DialogActions>
      </Dialog>
      {/*SIGN OUT CONFIRMATION SECTION*/}
    </>
  );
}
