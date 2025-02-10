const DarkModeTest: React.FC = () => {
  return (
    <div className='p-6 space-y-4'>
      <h1 className='text-4xl text-primary dark:text-accent'>
        This text changes color in dark mode!
      </h1>
      <p className='text-lg text-textPrimary dark:text-textSecondary'>
        This paragraph adapts to the theme.
      </p>
      <div className='p-4 bg-background dark:bg-secondary rounded shadow'>
        This box changes its background color in dark mode.
      </div>
    </div>
  );
};

export { DarkModeTest };
