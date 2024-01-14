module.exports = {
  extends: ['@commitlint/config-conventional', 'cz'],
  prompt: {
    settings: {},
    messages: {
      skip: ':skip',
      max: '最多 %d 个字符',
      min: '至少 %d 个字符',
      emptyWarning: '不能为空',
      upperLimitWarning: '超过限制',
      lowerLimitWarning: '低于限制',
    },
    types: [
      { value: 'feat', name: 'feat:     ✨  新功能', emoji: '✨ ' },
      { value: 'fix', name: 'fix:      🐛  修复 bug', emoji: '🐛 ' },
      { value: 'docs', name: 'docs:     📝  仅文档更改', emoji: '📝 ' },
      {
        value: 'style',
        name: 'style:    💄  不影响代码含义的更改',
        emoji: '💄 ',
      },
      {
        value: 'refactor',
        name: 'refactor: 📦️   既不修复错误也不添加新功能的代码更改',
        emoji: '📦️ ',
      },
      {
        value: 'perf',
        name: 'perf:     🚀  提升性能的代码更改',
        emoji: '🚀 ',
      },
      {
        value: 'test',
        name: 'test:     🚨  添加缺失的测试或纠正现有测试',
        emoji: '🚨 ',
      },
      {
        value: 'build',
        name: 'build:    🛠   影响构建系统或外部依赖的更改',
        emoji: '🛠 ',
      },
      {
        value: 'ci',
        name: 'ci:       🎡  更改 CI 配置文件和脚本',
        emoji: '🎡 ',
      },
      {
        value: 'chore',
        name: 'chore:    🔨  其他不修改源代码或测试文件的更改',
        emoji: '🔨 ',
      },
      { value: 'revert', name: 'revert:   ⏪️  撤销之前的提交', emoji: ':rewind:' },
    ],
    useEmoji: true,
    confirmColorize: true,
    emojiAlign: 'center',
    questions: {
      scope: {
        description: '此更改的范围是什么（例如组件或文件名）',
      },
      subject: {
        description: '对更改进行简短的、使用命令式的描述',
      },
      body: {
        description: '提供更改的详细描述',
      },
      isBreaking: {
        description: '是否有破坏性变化？',
      },
      breakingBody: {
        description: 'BREAKING CHANGE 提交需要一个正文。请输入提交本身的详细描述',
      },
      breaking: {
        description: '描述破坏性变化',
      },
      isIssueAffected: {
        description: '此更改是否影响任何开放的问题？',
      },
      issuesBody: {
        description: '如果关闭了问题，提交需要一个正文。请输入提交本身的详细描述',
      },
      issues: {
        description: '添加问题引用（例如 "fix #123"，"re #123"）',
      },
    },
  },
};
