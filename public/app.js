fetch("data.json")
  .then((Response) => Response.json())
  .then((data) => {
    const daily = document.querySelector(".daily");
    const weekly = document.querySelector(".weekly");
    const monthly = document.querySelector(".monthly");

    //    WORK QUERYSELECTORS
    const workPrevious = document.querySelector(".work-previous");
    const workCurrent = document.querySelector(".work-current");

    //    PLAY QUERYSELECTORS
    const playPrevious = document.querySelector(".play-previous");
    const playCurrent = document.querySelector(".play-current");

    //    STUDY QUERYSELECTORS
    const studyPrevious = document.querySelector(".study-previous");
    const studyCurrent = document.querySelector(".study-current");

    //    EXERCISE QUERYSELECTORS
    const exercisePrevious = document.querySelector(".exercise-previous");
    const exerciseCurrent = document.querySelector(".exercise-current");

    //    SOCIAL QUERYSELECTORS
    const socialPrevious = document.querySelector(".social-previous");
    const socialCurrent = document.querySelector(".social-current");

    //    SELF CARE QUERYSELECTORS
    const selfCarePrevious = document.querySelector(".self-care-previous");
    const selfCareCurrent = document.querySelector(".self-care-current");

    //     data.map((datas) => {
    //         for (const d of  datas.timeframes.daily) {
    //             let { p, t } =d

    //         };
    //         console.log(p)
    //         console.log(datas.timeframes.daily);

    // })

    //  DAILY
    daily.addEventListener("click", () => {
      const select = daily.getAttribute("data-selected");
      if (select === "false") {
        daily.setAttribute("data-selected", true);
        weekly.setAttribute("data-selected", false);
        monthly.setAttribute("data-selected", false);

        // WORK DAILY
        const dailyWorkPrevious = data[0].timeframes.daily.previous;
        const dailyWorkCurrent = data[0].timeframes.daily.current;
        workPrevious.innerHTML = `Yesterday-${dailyWorkPrevious}hrs`;
        workCurrent.innerHTML = `${dailyWorkCurrent}hrs`;

        // PLAY DAILY
        const dailyPlayPrevious = data[1].timeframes.daily.previous;
        const dailyPlayCurrent = data[1].timeframes.daily.current;
        playPrevious.innerHTML = `Yesterday-${dailyPlayPrevious}hrs`;
        playCurrent.innerHTML = `${dailyPlayCurrent}hrs`;

        // STUDY DAILY
        const dailyStudyPrevious = data[2].timeframes.daily.previous;
        const dailyStudyCurrent = data[2].timeframes.daily.current;
        studyPrevious.innerHTML = `Yesterday-${dailyStudyPrevious}hrs`;
        studyCurrent.innerHTML = `${dailyStudyCurrent}hrs`;

        // EXRCISE DAILY
        const dailyExercisePrevious = data[3].timeframes.daily.previous;
        const dailyExerciseCurrent = data[3].timeframes.daily.current;
        exercisePrevious.innerHTML = `Yesterday-${dailyExercisePrevious}hrs`;
        exerciseCurrent.innerHTML = `${dailyExerciseCurrent}hrs`;

        // SOCIAL DAILY
        const dailySocialPrevious = data[4].timeframes.daily.previous;
        const dailySocialCurrent = data[4].timeframes.daily.current;
        socialPrevious.innerHTML = `Yesterday-${dailySocialPrevious}hrs`;
        socialCurrent.innerHTML = `${dailySocialCurrent}hrs`;

        // SELF CARE DAILY
        const dailySelfCarePrevious = data[5].timeframes.daily.previous;
        const dailySelfCareCurrent = data[5].timeframes.daily.current;
        selfCarePrevious.innerHTML = `Yesterday-${dailySelfCarePrevious}hrs`;
        selfCareCurrent.innerHTML = `${dailySelfCareCurrent}hrs`;
      }
    });

    // WEEKLY
    weekly.addEventListener("click", () => {
      const select = weekly.getAttribute("data-selected");
      if (select === "false") {
        weekly.setAttribute("data-selected", true);
        daily.setAttribute("data-selected", false);
        monthly.setAttribute("data-selected", false);

        //  WORK WEEKLY
        const weeklyWorkPrevious = data[0].timeframes.weekly.previous;
        const weeklyWorkcurrent = data[0].timeframes.weekly.current;
        workPrevious.innerHTML = `Last Week-${weeklyWorkPrevious}hrs`;
        workCurrent.innerHTML = `${weeklyWorkcurrent}hrs`;

        //  PLAY WEEKLY
        const weeklyPlayPrevious = data[1].timeframes.weekly.previous;
        const weeklyPlaycurrent = data[1].timeframes.weekly.current;
        playPrevious.innerHTML = `Last Week-${weeklyPlayPrevious}hrs`;
        playCurrent.innerHTML = `${weeklyPlaycurrent}hrs`;

        //  STUDY WEEKLY
        const weeklyStudyPrevious = data[2].timeframes.weekly.previous;
        const weeklyStudycurrent = data[2].timeframes.weekly.current;
        studyPrevious.innerHTML = `Last Week-${weeklyStudyPrevious}hrs`;
        studyCurrent.innerHTML = `${weeklyStudycurrent}hrs`;

        //  EXERCISE WEEKLY
        const weeklyExercisePrevious = data[3].timeframes.weekly.previous;
        const weeklyExercisecurrent = data[3].timeframes.weekly.current;
        exercisePrevious.innerHTML = `Last Week-${weeklyExercisePrevious}hrs`;
        exerciseCurrent.innerHTML = `${weeklyExercisecurrent}hrs`;

        //  SOCIAL WEEKLY
        const weeklySocialPrevious = data[4].timeframes.weekly.previous;
        const weeklySocialcurrent = data[4].timeframes.weekly.current;
        socialPrevious.innerHTML = `Last Week-${weeklySocialPrevious}hrs`;
        socialCurrent.innerHTML = `${weeklySocialcurrent}hrs`;

        //  SELF CARE WEEKLY
        const weeklySelfcarePrevious = data[5].timeframes.weekly.previous;
        const weeklySelfCarecurrent = data[5].timeframes.weekly.current;
        selfCarePrevious.innerHTML = `Last Week-${weeklySelfcarePrevious}hrs`;
        selfCareCurrent.innerHTML = `${weeklySelfCarecurrent}hrs`;
      }
    });

    //  MONTHLY
    monthly.addEventListener("click", () => {
      const select = monthly.getAttribute("data-selected");
      if (select === "false") {
        monthly.setAttribute("data-selected", true);
        weekly.setAttribute("data-selected", false);
        daily.setAttribute("data-selected", false);

        // WORK MONTHLY
        const monthlyWorkPrevious = data[0].timeframes.monthly.previous;
        const monthlyWorkcurrent = data[0].timeframes.monthly.current;
        workPrevious.innerHTML = `Last Month-${monthlyWorkPrevious}hrs`;
        workCurrent.innerHTML = `${monthlyWorkcurrent}hrs`;

        // PLAY MONTHLY
        const monthlyPlayPrevious = data[1].timeframes.monthly.previous;
        const monthlyPlaycurrent = data[1].timeframes.monthly.current;
        playPrevious.innerHTML = `Last Month-${monthlyPlayPrevious}hrs`;
        playCurrent.innerHTML = `${monthlyPlaycurrent}hrs`;

        // STUDY MONTHLY
        const monthlyStudyPrevious = data[2].timeframes.monthly.previous;
        const monthlyStudycurrent = data[2].timeframes.monthly.current;
        studyPrevious.innerHTML = `Last Month-${monthlyStudyPrevious}hrs`;
        studyCurrent.innerHTML = `${monthlyStudycurrent}hrs`;

        // EXERCISE MONTHLY
        const monthlyExercisePrevious = data[3].timeframes.monthly.previous;
        const monthlyExercisecurrent = data[3].timeframes.monthly.current;
        exercisePrevious.innerHTML = `Last Month-${monthlyExercisePrevious}hrs`;
        exerciseCurrent.innerHTML = `${monthlyExercisecurrent}hrs`;

        // SOCIAL MONTHLY
        const monthlySocialPrevious = data[4].timeframes.monthly.previous;
        const monthlySocialcurrent = data[4].timeframes.monthly.current;
        socialPrevious.innerHTML = `Last Month-${monthlySocialPrevious}hrs`;
        socialCurrent.innerHTML = `${monthlySocialcurrent}hrs`;

        // SELF CARE MONTHLY
        const monthlySelfCarePrevious = data[5].timeframes.monthly.previous;
        const monthlySelfCarecurrent = data[5].timeframes.monthly.current;
        selfCarePrevious.innerHTML = `Last Month-${monthlySelfCarePrevious}hrs`;
        selfCareCurrent.innerHTML = `${monthlySelfCarecurrent}hrs`;
      }
    });
  });
