

function StopWatch () {
    let startTime, stopTime, duration, running = 0;


    this.start = function () {
        if (running) 
            throw new Error ('Stopwatch is already running')

        running = true;

    startTime = new Date ();
    };

    this.stop = function () {
        if (!running) 
            throw new Error ('Stopwatch has not started')
        
        running = false;

    stopTime = new Date ();

    const seconds = (stopTime.getTime () - startTime.getTime()) / 1000;
    duration += seconds;
    };

    this.reset = function () {
        startTime = null;
        stopTime = null;
        running = false;
        duration = 0;

    };

    Object.defineProperty (this, 'duration',{
        get : () => duration
    })
}