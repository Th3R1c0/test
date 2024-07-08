'use client';
import Image from 'next/image';

const Sidebar = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="flex 1xl:fixed mt-16">
        <div className="flex  w-60 flex-col h-max overflow-y-auto bg-slate-50 pt-8 dark:border-slate-700 dark:bg-slate-900  sm:w-72">
          <div className="flex px-4">
            {/* Logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-blue-600"
              fill="currentColor"
              strokeWidth="1"
              viewBox="0 0 24 24"
            >
              <path d="M20.553 3.105l-6 3C11.225 7.77 9.274 9.953 8.755 12.6c-.738 3.751 1.992 7.958 2.861 8.321A.985.985 0 0012 21c6.682 0 11-3.532 11-9 0-6.691-.9-8.318-1.293-8.707a1 1 0 00-1.154-.188zm-7.6 15.86a8.594 8.594 0 015.44-8.046 1 1 0 10-.788-1.838 10.363 10.363 0 00-6.393 7.667 6.59 6.59 0 01-.494-3.777c.4-2 1.989-3.706 4.728-5.076l5.03-2.515A29.2 29.2 0 0121 12c0 4.063-3.06 6.67-8.046 6.965zM3.523 5.38A29.2 29.2 0 003 12a6.386 6.386 0 004.366 6.212 1 1 0 11-.732 1.861A8.377 8.377 0 011 12c0-6.691.9-8.318 1.293-8.707a1 1 0 011.154-.188l6 3A1 1 0 018.553 7.9z"></path>
            </svg>
            <h2 className="px-5 text-lg font-medium text-slate-800 dark:text-slate-200">
              Chats
              <span className="mx-2 rounded-full bg-blue-600 px-2 py-1 text-xs text-slate-200">
                6
              </span>
            </h2>
          </div>
          <div className="mx-2 mt-8">
            <button className="flex w-full gap-x-4 rounded-lg border border-slate-300 p-4 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 5l0 14"></path>
                <path d="M5 12l14 0"></path>
              </svg>
              New Chat
            </button>
          </div>
          {/* Previous chats container */}
          <div className="h-1/2 space-y-4 overflow-y-auto border-b border-slate-300 px-2 py-4 dark:border-slate-700">
            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
              <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">
                Tailwind Classes
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                12 Mar
              </p>
            </button>
            <button className="flex w-full flex-col gap-y-2 rounded-lg bg-slate-200 px-3 py-2 text-left transition-colors duration-200 focus:outline-none dark:bg-slate-800">
              <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">
                explain quantum computing
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                10 Feb
              </p>
            </button>
            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
              <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">
                How to create ERP Diagram
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                22 Jan
              </p>
            </button>
            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
              <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">
                API Scaling Strategies
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                1 Jan
              </p>
            </button>
            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
              <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">
                What is GPT UI?
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                1 Jan
              </p>
            </button>
            <button className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800">
              <h1 className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200">
                How to use Tailwind components?
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                1 Jan
              </p>
            </button>
          </div>
          <div className="mt-auto w-full space-y-4 px-2 py-4">
            <button className="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
                <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"></path>
              </svg>
              User
            </button>
            <button className="flex w-full gap-x-2 rounded-lg px-3 py-2 text-left text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:text-slate-200 dark:hover:bg-slate-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              </svg>
              Settings
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

const Navigation = () => {
  return (
    <div className="w-full h-max p-4 flex justify-between ">
      <div>Ai language teacher Beta</div>
      <div className="flex items-center space-x-4">
        <div>Github</div>
        <div>Discord</div>
      </div>
    </div>
  );
};

const Lessons = () => {
  const lessons = [
    {
      name: 'General Lesson',
      description:
        'Teacher will roleplay a situation or character of your choosing',
      presets: ['Beginner', 'Intermediate', 'Advanced'],
      live: true,
    },
    {
      name: 'Roleplay',
      description:
        'Teacher will roleplay a situation or character of your choosing',
      presets: [
        'Classroom',
        'Cafe',
        'Office',
        'Supermarket',
        'Restaurant',
        'Hospital',
        'Library',
        'Airport',
        'Park',
      ],
      live: true,
    },
    {
      name: 'Textbook Lesson',
      description:
        'Select or upload a textbook, and teacher will teach you lessons from that textbook',
      presets: [
        'Genki',
        'Tae Kim',
        'Minna no Nihongo',
        'Japanese for Busy People',
        'Integrated Approach to Intermediate Japanese',
        'A Dictionary of Basic Japanese Grammar',
        'Japanese the Manga Way',
        'Adventures in Japanese',
        'Yookoso!',
      ],
      live: true,
    },
    {
      name: 'Photo Mode',
      description:
        'Photo mode exercise involves describing images and getting real-time feedback.',
      presets: [
        'Nature',
        'Cityscapes',
        'People',
        'Food',
        'Animals',
        'Art',
        'Sports',
        'Technology',
        'Architecture',
      ],
      live: true,
    },
    {
      name: 'Pronunciation',
      description: 'Teacher will help with pronunciation feedback.',
      presets: [
        'Vowels',
        'Consonants',
        'Intonation',
        'Sentence Rhythm',
        'Word Stress',
        'Pitch Accent',
        'Liaison',
        'Elision',
        'Contractions',
      ],
      live: true,
    },
    {
      name: 'JLPT Practice',
      description:
        'Teacher will generate quizzes and help you with JLPT practice.',
      presets: [
        'N1',
        'N2',
        'N3',
        'N4',
        'N5',
        'Vocabulary',
        'Grammar',
        'Reading',
        'Listening',
      ],
      live: false,
    },
  ];

  const Pending = () => {
    return (
      <div>
        <span className="inline-flex items-center gap-x-2 rounded-full bg-amber-600/20 px-2.5 py-1 text-sm font-semibold leading-5 text-amber-600">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-amber-600"></span>
          Comming soon
        </span>
      </div>
    );
  };

  return (
    <div className="p-8 flex flex-col space-y-4">
      <div className="text-4xl font-semibold">Sakura - Japanese Teacher</div>
      <div className="text-2xl font-gray-800">Choose a lesson</div>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 text-slate-900 dark:text-slate-200 lg:grid-cols-2 xl:grid-cols-3"
      >
        {lessons.map((lesson, index) => (
          <li
            key={index}
            className="group col-span-1 rounded-lg bg-slate-50 shadow transition-colors duration-300 hover:bg-blue-600 dark:bg-slate-900 dark:hover:bg-blue-600"
          >
            <a
              className="flex cursor-pointer items-center justify-between space-x-6 p-6"
              href=""
            >
              <div className="flex flex-col items-center gap-y-1 rounded-lg text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 6l7 7l-4 4"></path>
                  <path d="M5.828 18.172a2.828 2.828 0 0 0 4 0l10.586 -10.586a2 2 0 0 0 0 -2.829l-1.171 -1.171a2 2 0 0 0 -2.829 0l-10.586 10.586a2.828 2.828 0 0 0 0 4z"></path>
                  <path d="M4 20l1.768 -1.768"></path>
                </svg>
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-3">
                  <h3 className="text-sm font-medium text-slate-900 transition-colors duration-300 group-hover:text-slate-50 dark:text-slate-200">
                    {lesson.name}
                  </h3>
                  {lesson.live !== true && <Pending />}
                </div>
                <p className="mt-1 text-sm text-slate-500 transition-colors duration-300 group-hover:text-slate-300">
                  {lesson.description}
                </p>
                <div className="flex space-x-2 mt-2">
                  {lesson.presets.slice(0, 2).map((preset, index) => {
                    return (
                      <span
                        key={index}
                        className="rounded-full bg-blue-600/20 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600 sm:text-sm"
                      >
                        {preset}
                      </span>
                    );
                  })}
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const UserInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.value);
  };
  return (
    <div>
      {/* <!-- Prompt message input --> absolute bottom-0 left-0 */}
      <form
        className="mt-6  right-0 border-2 border-white rounded-2xl mb-6"
        onSubmit={handleSubmit}
      >
        <label htmlFor="chat-input" className="sr-only">
          Enter your prompt
        </label>
        <div className="relative">
          <button
            type="button"
            className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-600"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M9 2m0 3a3 3 0 0 1 3 -3h0a3 3 0 0 1 3 3v5a3 3 0 0 1 -3 3h0a3 3 0 0 1 -3 -3z"></path>
              <path d="M5 10a7 7 0 0 0 14 0"></path>
              <path d="M8 21l8 0"></path>
              <path d="M12 17l0 4"></path>
            </svg>
            <span className="sr-only">Use voice input</span>
          </button>
          <textarea
            id="chat-input"
            className="block w-full resize-none rounded-xl border-none bg-slate-200 p-4 pl-10 pr-20 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-900 dark:text-slate-200 dark:placeholder-slate-400 dark:focus:ring-blue-600 sm:text-base"
            placeholder="Enter your prompt"
            rows="1"
            required
          ></textarea>
          <button
            type="submit"
            className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:text-base"
          >
            Send <span className="sr-only">Send message</span>
          </button>
        </div>
      </form>
    </div>
  );
};

const Conversation = () => {
  const test_conversation = [
    {
      role: 'assistant',
      content: 'Explain quantum computing in simple terms',
    },
    {
      role: 'user',
      content: `Certainly! Quantum computing is a new type of computing that relies on the principles of quantum physics. Traditional computers, like the one you might be using right now, use bits to store and process information. These bits can represent either a 0 or a 1. In contrast, quantum computers use quantum bits, or qubits.

  Unlike bits, qubits can represent not only a 0 or a 1 but also a superposition of both states simultaneously. This means that a qubit can be in multiple states at once, which allows quantum computers to perform certain calculations much faster and more efficiently`,
    },
    {
      role: 'assistant',
      content: 'What are three great applications of quantum computing?',
    },
    {
      role: 'user',
      content: `Three great applications of quantum computing are: Optimization of complex problems, Drug Discovery and Cryptography.`,
    },
    {
      role: 'assistant',
      content: 'What are three great applications of quantum computing?',
    },
    {
      role: 'user',
      content: `Three great applications of quantum computing are: Optimization of complex problems, Drug Discovery and Cryptography.`,
    },
  ];
  const conversation: any = [];

  return (
    <div className="flex w-full h-full flex-col">
      {/* <!-- Prompt Messages --> */}
      {test_conversation.length !== 0 ? (
        <div className="flex-1 space-y-6 overflow-y-auto rounded-xl bg-slate-200 p-4 text-sm leading-6 text-slate-900 shadow-sm dark:bg-slate-900 dark:text-slate-300 sm:text-base sm:leading-7">
          {test_conversation.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.role === 'user' ? 'flex-row-reverse' : ''
              } items-start`}
            >
              <img
                className={`${
                  message.role === 'user' ? 'ml-2' : 'mr-2'
                } h-8 w-8 rounded-full`}
                src={`https://dummyimage.com/128x128/${
                  message.role === 'user' ? '354ea1' : '363536'
                }/ffffff&text=${message.role === 'user' ? 'G' : 'J'}`}
              />
              <div
                className={`flex ${
                  message.role === 'user'
                    ? 'rounded-b-xl rounded-tl-xl'
                    : 'rounded-b-xl rounded-tr-xl'
                } bg-slate-50 p-4 dark:bg-slate-800 sm:max-w-md md:max-w-2xl`}
              >
                <p>{message.content}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center  ">
          <div className="text-2xl font-semibold">Ai teacher prebeta</div>
          <div className="font-blue-200">Select a lesson to begin</div>
        </div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="w-full h-full  flex items-center justify-center">
      <div className=" relative flex-grow flex flex-col h-full max-w-6xl   ">
        <Lessons />
        <Conversation />
        <UserInput />
      </div>
    </div>
  );
};
export default function Home() {
  return (
    <div className="flex flex-col w-screen h-screen overflow-x-hidden">
      <Navigation />

      <div className="flex h-full w-full">
        <Sidebar />
        <App />
      </div>
    </div>
  );
}
