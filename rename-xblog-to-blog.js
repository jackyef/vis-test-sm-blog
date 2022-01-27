const fs = require("fs");
const path = require("path");

const baseActualImagesPath = path.join(__dirname, "./screenshots/actual");
fs.readdirSync(baseActualImagesPath).forEach((file) => {
  console.log(file);
  fs.renameSync(
    path.join(baseActualImagesPath, file),
    path.join(
      baseActualImagesPath,
      file.replace("www-stickermule-com-xblog", "www-stickermule-com-blog")
    )
  );
});
