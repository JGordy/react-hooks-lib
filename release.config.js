module.exports = {
	"plugins": [
		"@semantic-release/commit-analyzer",
		"@semantic-release/release-notes-generator",
		[
			"@semantic-release/changelog",
			{
				"changelogFile": "CHANGELOG.md"
			}
		],
		[
			"@semantic-release/npm",
			{
				"tarballDir": "release",
				"pkgRoot": "dist/"
			}
		],
		[
			"@semantic-release/github",
			{
				"assets": "release/*.tgz"
			}
		],
		[
			"@semantic-release/git",
			{
				"assets": "CHANGLELOG.md",
				"message": "${nextRelease.version} CHANGELOG [skip ci]\n\n${nextRelease.notes}",
			}
		]
	],
	"preset": "angular"
}
