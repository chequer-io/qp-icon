const tree = {
	"path": "icons",
	"name": "icons",
	"children": [
		{
			"path": "icons/a.svg",
			"name": "a.svg",
			"type": "file"
		},
		{
			"path": "icons/one-depth",
			"name": "one-depth",
			"children": [
				{
					"path": "icons/one-depth/b.svg",
					"name": "b.svg",
					"type": "file"
				},
				{
					"path": "icons/one-depth/two_depth",
					"name": "two_depth",
					"children": [
						{
							"path": "icons/one-depth/two_depth/c.svg",
							"name": "c.svg",
							"type": "file"
						},
						{
							"path": "icons/one-depth/two_depth/d.svg",
							"name": "d.svg",
							"type": "file"
						}
					],
					"type": "directory"
				}
			],
			"type": "directory"
		}
	],
	"type": "directory"
};

export default tree;
