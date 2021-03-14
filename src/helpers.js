export const ConvertTime = (pastTime) => {
  // 1575909015000
  const now = new Date().getTime();
  const created = pastTime;
  let howLongAgo = created - now;
  // Convert to a positive integer

  var getHumanTime = function (timestamp) {
    // Convert to a positive integer
    var time = Math.abs(timestamp);

    // Define humanTime and units
    var humanTime, units;

    // If there are years
    if (time > 1000 * 60 * 60 * 24 * 365) {
      humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 365), 10);
      units = "years";
    }

    // If there are months
    else if (time > 1000 * 60 * 60 * 24 * 30) {
      humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 30), 10);
      units = "months";
    }

    // If there are weeks
    else if (time > 1000 * 60 * 60 * 24 * 7) {
      humanTime = parseInt(time / (1000 * 60 * 60 * 24 * 7), 10);
      units = "weeks";
    }

    // If there are days
    else if (time > 1000 * 60 * 60 * 24) {
      humanTime = parseInt(time / (1000 * 60 * 60 * 24), 10);
      units = "days";
    }

    // If there are hours
    else if (time > 1000 * 60 * 60) {
      humanTime = parseInt(time / (1000 * 60 * 60), 10);
      units = "hours";
    }

    // If there are minutes
    else if (time > 1000 * 60) {
      humanTime = parseInt(time / (1000 * 60), 10);
      units = "minutes";
    }

    // Otherwise, use seconds
    else {
      humanTime = parseInt(time / 1000, 10);
      units = "seconds";
    }

    return `${humanTime} ${units} ago`;
  };

  return getHumanTime(howLongAgo);
};
