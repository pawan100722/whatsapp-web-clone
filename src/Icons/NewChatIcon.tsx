function NewChatIcon(props: any) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      // height="1em"
      // width="1em"
      {...props}
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M6.455 19L2 22.5V4a1 1 0 011-1h18a1 1 0 011 1v14a1 1 0 01-1 1H6.455zM11 10H8v2h3v3h2v-3h3v-2h-3V7h-2v3z" />
    </svg>
  );
}

export default NewChatIcon;
