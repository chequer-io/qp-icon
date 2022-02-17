const tree = {
	"path": "svg",
	"name": "svg",
	"children": [
		{
			"path": "svg/a.svg",
			"name": "a.svg",
			"type": "file"
		},
		{
			"path": "svg/one-depth",
			"name": "one-depth",
			"children": [
				{
					"path": "svg/one-depth/b.svg",
					"name": "b.svg",
					"type": "file"
				},
				{
					"path": "svg/one-depth/two_depth",
					"name": "two_depth",
					"children": [
						{
							"path": "svg/one-depth/two_depth/c.svg",
							"name": "c.svg",
							"type": "file"
						},
						{
							"path": "svg/one-depth/two_depth/d.svg",
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
