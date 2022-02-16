module.exports = {
  format_join_date: (joinDate) => {
    const joinDateString =
      joinDate.toDateString().split(" ")[1] +
      " " +
      joinDate.toDateString().split(" ")[3];
    return `${joinDateString}`;
  },

  format_posted_date: (date) => {
    const now = new Date();
    const difference = Math.abs(now - date);

    const days = Math.ceil(difference / (1000 * 3600 * 24));
    const hours = Math.ceil(difference / (1000 * 3600));
    const minutes = Math.ceil(difference / (1000 * 60));

    if (minutes > 60 ) {
      timePosted = hours;
    } else if (hours > 24) {
      timePosted = days;
    } else {
      timePosted = minutes;
    }

    if (minutes > 60 && minutes < 120) {
      postString = "hour";
    } else if (hours > 24 && hours < 48) {
      postString = "day";
    } else if (minutes < 2) {
      postString = "minute";
    }

    if (days > 1) {
      postString = "days";
    } else if (hours > 1) {
      postString = "hours";
    } else if (minutes > 2) {
      postString = "minutes";
    }

    return `Posted ${timePosted} ${postString} ago`;
  },
};
