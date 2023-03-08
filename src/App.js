import { useState } from "react";

export default function Home({
  onChange = (data, day, time) => {},
  iconSelected = "/circle.png",
  iconUnselected = undefined,
}) {
  const timeinaday = [
    "00:00",
    "01:00",
    "02:00",
    "03:00",
    "04:00",
    "05:00",
    "06:00",
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
    "23:00",
  ];
  const [data, setData] = useState([
    {
      day: "Monday",
      timeslot: {
        "00:00": false,
        "01:00": false,
        "02:00": false,
        "03:00": false,
        "04:00": false,
        "05:00": false,
        "06:00": false,
        "07:00": false,
        "08:00": false,
        "09:00": false,
        "10:00": false,
        "11:00": false,
        "12:00": false,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
        "21:00": false,
        "22:00": false,
        "23:00": false,
      },
    },
    {
      day: "Tuesday",
      timeslot: {
        "00:00": false,
        "01:00": false,
        "02:00": false,
        "03:00": false,
        "04:00": false,
        "05:00": false,
        "06:00": false,
        "07:00": false,
        "08:00": false,
        "09:00": false,
        "10:00": false,
        "11:00": false,
        "12:00": false,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
        "21:00": false,
        "22:00": false,
        "23:00": false,
      },
    },
    {
      day: "Wednesday",
      timeslot: {
        "00:00": false,
        "01:00": false,
        "02:00": false,
        "03:00": false,
        "04:00": false,
        "05:00": false,
        "06:00": false,
        "07:00": false,
        "08:00": false,
        "09:00": false,
        "10:00": false,
        "11:00": false,
        "12:00": false,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
        "21:00": false,
        "22:00": false,
        "23:00": false,
      },
    },
    {
      day: "Thursday",
      timeslot: {
        "00:00": false,
        "01:00": false,
        "02:00": false,
        "03:00": false,
        "04:00": false,
        "05:00": false,
        "06:00": false,
        "07:00": false,
        "08:00": false,
        "09:00": false,
        "10:00": false,
        "11:00": false,
        "12:00": false,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
        "21:00": false,
        "22:00": false,
        "23:00": false,
      },
    },
    {
      day: "Friday",
      timeslot: {
        "00:00": false,
        "01:00": false,
        "02:00": false,
        "03:00": false,
        "04:00": false,
        "05:00": false,
        "06:00": false,
        "07:00": false,
        "08:00": false,
        "09:00": false,
        "10:00": false,
        "11:00": false,
        "12:00": false,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
        "21:00": false,
        "22:00": false,
        "23:00": false,
      },
    },
    {
      day: "Saturday",
      timeslot: {
        "00:00": false,
        "01:00": false,
        "02:00": false,
        "03:00": false,
        "04:00": false,
        "05:00": false,
        "06:00": false,
        "07:00": false,
        "08:00": false,
        "09:00": false,
        "10:00": false,
        "11:00": false,
        "12:00": false,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
        "21:00": false,
        "22:00": false,
        "23:00": false,
      },
    },
    {
      day: "Sunday",
      timeslot: {
        "00:00": false,
        "01:00": false,
        "02:00": false,
        "03:00": false,
        "04:00": false,
        "05:00": false,
        "06:00": false,
        "07:00": false,
        "08:00": false,
        "09:00": false,
        "10:00": false,
        "11:00": false,
        "12:00": false,
        "13:00": false,
        "14:00": false,
        "15:00": false,
        "16:00": false,
        "17:00": false,
        "18:00": false,
        "19:00": false,
        "20:00": false,
        "21:00": false,
        "22:00": false,
        "23:00": false,
      },
    },
  ]);

  const onClick = (dayIdx, timeIdx) => {
    const existing = [...data];
    existing[dayIdx].timeslot[timeIdx] = !data[dayIdx].timeslot[timeIdx];
    setData(existing);
    onChange(data, existing[dayIdx].day, timeIdx);
  };

  return (
    <div className="itimeslot-wrapper">
      <div className="itimeslot-box">
        <div className="itimeslot-side">
          <p className="itimeslot-side-first">-</p>
          {data.map((item, i) => (
            <p className="itime-side-item" key={i}>
              {item.day}
            </p>
          ))}
        </div>
        <div className="itimeslot-content">
          <div className="itimeslot-content-header">
            {timeinaday.map((time, i) => {
              return (
                <p key={i} className="itimeslot-content-header-item">
                  {time}
                </p>
              );
            })}
          </div>
          {data.map((item, i) => {
            return (
              <div key={i} className="itimeslot-content-row">
                {Object.keys(item.timeslot).map((time, j) => {
                  return (
                    <p
                      key={j}
                      className={`itimeslot-content-row-item ${
                        item.timeslot[time] ? "selected" : ""
                      }`}
                      onClick={(_) => onClick(i, time)}
                    >
                      {item.timeslot[time] ? (
                        iconSelected ? (
                          <img
                            src={iconSelected}
                            width={20}
                            height={20}
                            alt="selected"
                          />
                        ) : (
                          ""
                        )
                      ) : iconUnselected ? (
                        <img
                          src={iconUnselected}
                          width={20}
                          height={20}
                          alt="unselected"
                        />
                      ) : (
                        ""
                      )}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
