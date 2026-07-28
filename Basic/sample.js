// ======================================================
// 1. VARIABLES & FUNCTIONS
// ======================================================

const name = "Rukshan";
console.log(name);

const greet = function () {
  console.log("Hi dude");
};

greet();

const greet2 = () => {
  console.log("Hi friend");
};

greet2();

const times = () => {
  setTimeout(() => {
    console.log("Hii");
  }, 1000);
};

times();

const greet3 = () => {
  setTimeout(() => {
    console.log("Hi bro");
  }, 2000);
};

greet3();


// ======================================================
// 2. MODULE IMPORTS
// ======================================================

const path = require("path");
const os = require("os");

const { currentDate, year, profilePath } = require("./logger");
const { add, sub, multiple } = require("./mathOpertions");


// ======================================================
// 3. CUSTOM MODULE TESTING
// ======================================================

console.log(add(20, 100));
console.log(sub(150, 50));
console.log(multiple(20, 5));

console.log(currentDate(), year());


// ======================================================
// 4. PATH INFORMATION
// ======================================================

console.log(__filename);
console.log(__dirname);

console.log(path.parse(__filename));
console.log(path.parse(__dirname));

console.log(profilePath);


// ======================================================
// 5. OS MODULE
// ======================================================

if (os.platform() === "win32") {
  console.log("Windows");
  console.log("Total Memory:", os.totalmem());
  console.log("Free Memory :", os.freemem());
} else if (os.platform() === "darwin") {
  console.log("Mac");
} else {
  console.log("Linux/Other");
}


// ======================================================
// 6. FILE SYSTEM (FS)
// ======================================================

const fs = require("fs").promises;
const fs = require("fs");

const data = fs.readdirSync("./");

console.log(data);

fs.readdir("./a", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.readdir("./a", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.mkdir("myFolder", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

fs.mkdir("myFolder/folder", (err) => {
  if(err){
    console.log(err);
    return;
  }
})

fs.mkdir("myFolder/folder/folder1", (err) => {
  if (err) {
    console.log(err);
    return;
  }
});

const data1 = fs.readdirSync("myFolder");
console.log(data1);

async function mkFol() {
  try {
    await fs.mkdir("NewFolder", (err) => {
      if (err) {
        console.log(err);
      }
    });
  } catch (err) {
    console.log(err);
  }
}

mkFol();

function creFol() {
  const folder = fs.existsSync("NewFolder1", (err) => {
    if (err) {
      console.log(err + "Folder Exists");
    }
  })

  if (!folder) {
    fs.mkdir("NewFolder1", (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log("Already Exists");
  };
}

creFol();


// ======================================================
// 7. CREATE "app" FOLDER
// ======================================================

function folCre() {
  const folder = fs.existsSync("app", (err) => {
    console.log(err);
  });

  if (!folder) {
    fs.mkdir("app", (err) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    console.log("Folder Exists");
  }
}

folCre();


// ======================================================
// 8. CREATE "src" FOLDER
// ======================================================

function cf() {
  const folder = fs.existsSync("src", (err) => {
    if (err) {
      console.log(err);
    }
  });

  if (!folder) {
    fs.mkdir("src", (err) => {
      console.log(err);
    });
  } else {
    console.log("exists");
  }
}

cf();


// ======================================================
// 9. HTTP SERVER
// ======================================================

const http = require("http");

const path = require("path");

const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("it's home page");
  } else if (req.url === "/about") {
    res.write("it's about page");
  } else {
    res.write("page not found");
  }

  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});


// ======================================================
// 10. CREATE "cf/src" FOLDER
// ======================================================

function cfs() {
  const folder = fs.existsSync("cf/src", (err) => {
    if (err) {
      console.log(err);
    }
  });

  if (!folder) {
    fs.mkdir("cf/src", (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("already exists");
      }
    });
  }
}

cfs();


// ======================================================
// 11. FINAL PATH OUTPUT
// ======================================================

console.log(__filename);
console.log(__dirname);