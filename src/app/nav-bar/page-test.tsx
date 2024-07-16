"use client";
import SettingsIcon from "@mui/icons-material/Settings";
import * as React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { useEffect, useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useRouter } from "next/navigation";
import { destroyCookie } from "nookies";
// import {NextRequest} from "next/server";
import Link from "@mui/material/Link";
type Props = {
  pageName: string;
};

export default function NavBarTest({ pageName }: Props) {
  const router = useRouter();

  const [loggedInUser, setLoggedInUser] = useState<string>();

  useEffect(() => {
    let storedLoggedInUser = localStorage.getItem("loggedInUsername");

    if (storedLoggedInUser) {
      setLoggedInUser(storedLoggedInUser);
    }
  }, []);

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
    localStorage.clear();
    router.push("/login");
  };

  return (
    <>
      <div
        className={
          "w-auto mb-5 bg-gradient-to-r from-blue-600 to-blue-500 drop-shadow-lg rounded-lg"
        }
      >
        <div className="grid grid-cols-2 p-3 gap-4 text-white">
          <div className="grid grid-rows-1 gap-1">
            <div className="flex justify-start gap-2 ml-1 text-lg">
              <div className={"text-gray-300"}>
                <a href={"/home-page"}>Cancer Detector</a> /
              </div>

              <div className={"font-bold"}>{pageName}</div>
            </div>
          </div>

          <div className="flex justify-end gap-5 font-bold text-xl">
            {/*<div>TBA</div>*/}
            <div>
              <Link href="/system-admin">
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
            Hie {localStorage.getItem("loggedInUsername")}, are you sure you
            want to log out?
          </p>
          {/*<DialogContentText*/}
          {/*    className={"text-black text-xl"}*/}
          {/*    id="alert-dialog-description"*/}

          {/*>*/}
          {/*    Hie {localStorage.getItem('loggedInUsername')}, are you sure you want to log out?*/}
          {/*</DialogContentText>*/}
        </DialogContent>
        <DialogActions>
          <button
            className={
              "bg-green-700 hover:bg-green-600 text-white w-1/3 h-10 rounded font-bold"
            }
            onClick={handleClose}
          >
            NO
          </button>
          <div className={"w-1/3"}></div>
          <button
            className={
              "bg-red-700 hover:bg-red-600 text-white w-1/3 h-10 rounded font-bold"
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
