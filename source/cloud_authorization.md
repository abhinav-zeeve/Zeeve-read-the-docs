---
description: Explore the best practices and technical details for managing authorization in Zeeve's cloud-based platform. Learn how to secure your data and control access to resources with our API and tools.
---
# Cloud Authorizations

Zeeve allows you to authorize multiple cloud accounts of yours so as to create networks in the cloud of your choice. You may choose to deploy some nodes of network on one cloud and extend some nodes of the same on another. This cross cloud deployment maybe a major requirement for your usecase or clients especially for creating/expanding consortiums.

Zeeve supports a list of cloud for you to choose from. You can authorize multiple clouds and choose between them at the time of creating networks or nodes. Following is the list of currently supported clouds:-

1. AWS
2. Digital Ocean
3. Google Cloud
4. Tencent Cloud

---
***INTERESTING FACT:** Zeeve doesn't use **blockchain services** of any of the supported cloud platforms, and hence is not restricted for the level of features it can provide for a protocol on any cloud.*

---


## AWS Authorization

### Configuration on AWS Portal

Before you authorize your AWS account with Zeeve, you'll need following provide IAM permissions to deploy a network:

1. Login into the AWS console, go to IAM service by clicking Security Credential on the upper right corner.
    
    ![img](./images/awsconsole.png)

2. Select the **User** for which needs to be authorized on the Zeeve platform.
    
    ![img](./images/iam.jpg)

3. Click on Add Permissions button, and Create Inline Policy.
    
    ![img](./images/permissions.jpg)

4. Copy the **ACCOUNTID** from the upper-right corner (we will need this Account ID in Further Steps).
    
    ![img](./images/accountid.png)

5. Click on the JSON button, and add the below mentioned policy, (Please do replace **ACCOUNTID** with your AWS Account ID)
    
    ![img](./images/jsonpermissions.jpg)

6. (Public Protocols IAM Policy) Write the Policy: 

```shell
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": "iam:PassRole",
			"Resource": "arn:aws:iam::ACCOUNTID:role/vpc-logs-role-*"
		},
		{
			"Effect": "Allow",
			"Action": [
				"iam:GetRole",
				"iam:GetPolicyVersion",
				"iam:GetPolicy",
				"iam:DeletePolicy",
				"iam:CreateRole",
				"iam:DeleteRole",
				"iam:AttachRolePolicy",
				"iam:CreatePolicy",
				"iam:ListInstanceProfilesForRole",
				"iam:DetachRolePolicy",
				"iam:ListPolicyVersions",
				"iam:ListAttachedRolePolicies",
				"iam:DeleteRolePolicy",
				"iam:ListRolePolicies",
                "iam:ListGroupsForUser",
                "iam:ListAttachedGroupPolicies",
                "iam:ListUserPolicies",
				"iam:GetRolePolicy"
			],
			"Resource": [
				"arn:aws:iam::ACCOUNTID:policy/*",
				"arn:aws:iam::ACCOUNTID:role/*"
			]
		},
		{
			"Effect": "Allow",
			"Action": [
				"logs:*",
				"servicequotas:GetServiceQuota"
			],
			"Resource": "*"
		}
	]
}
```

7. Name this policy as **Zeeve-IAM-Policy**, and click Save.

8. Grant AWS Managed EC2 Permissions:AmazonEC2FullAccess.
    a. Click on **Add Permissions -> Add Permissions**
    
    b. Click on Attach Policies Directly and Search for **AmazonEC2FullAccess**.
        
    ![img](./images/fullEC2.png)
    
    c. Select the permission and Click on Next.
    
    d. On the Review Page, Review the Policy and Click on Add Permissions.
        
    ![img](./images/confirmperms.png)

9. *(Only Permissive Protocol)* Grant below permissions for Permissive protocols.

```shell
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Effect": "Allow",
			"Action": [
				"elasticfilesystem:DescribeBackupPolicy",
				"cloudformation:ListStacks",
				"secretsmanager:*",
				"elasticfilesystem:CreateFileSystem",
				"cloudformation:CreateStack",
				"cloudformation:DeleteStack",
				"elasticfilesystem:PutBackupPolicy",
				"eks:*",
				"cloudformation:DescribeStacks",
				"logs:*"
			],
			"Resource": "*"
		},
		{
			"Effect": "Allow",
			"Action": [
				"iam:UpdateAssumeRolePolicy",
				"iam:GetPolicyVersion",
				"elasticfilesystem:DeleteAccessPoint",
				"iam:DeletePolicy",
				"iam:CreateRole",
				"iam:AttachRolePolicy",
				"iam:ListInstanceProfilesForRole",
				"iam:PassRole",
				"iam:DetachRolePolicy",
				"elasticfilesystem:DescribeLifecycleConfiguration",
				"iam:ListAttachedRolePolicies",
				"iam:ListAttachedUserPolicies",
				"elasticfilesystem:DescribeFileSystems",
				"elasticfilesystem:DeleteMountTarget",
				"iam:ListRolePolicies",
				"iam:DeleteOpenIDConnectProvider",
				"elasticfilesystem:CreateAccessPoint",
				"elasticfilesystem:DescribeMountTargets",
				"iam:GetRole",
				"iam:GetPolicy",
				"iam:DeleteRole",
				"iam:ListUserPolicies",
				"elasticfilesystem:TagResource",
				"iam:CreateOpenIDConnectProvider",
				"iam:CreatePolicy",
				"iam:CreateServiceLinkedRole",
				"elasticfilesystem:CreateMountTarget",
				"iam:ListPolicyVersions",
				"iam:GetUserPolicy",
				"iam:GetUser",
				"iam:GetOpenIDConnectProvider",
				"iam:GetRolePolicy",
				"elasticfilesystem:DeleteFileSystem",
				"elasticfilesystem:DescribeMountTargetSecurityGroups"
			],
			"Resource": [
				"arn:aws:elasticfilesystem:*:ACCOUNTID:file-system/*",
				"arn:aws:elasticfilesystem:*:ACCOUNTID:access-point/*",
				"arn:aws:iam::ACCOUNTID:user/*",
				"arn:aws:iam::ACCOUNTID:oidc-provider/*",
				"arn:aws:iam::ACCOUNTID:role/*",
				"arn:aws:iam::ACCOUNTID:policy/*",
				"arn:aws:iam::aws:policy/*"
			]
		},
		{
			"Effect": "Allow",
			"Action": "iam:ListPolicies",
			"Resource": [
				"arn:aws:iam::ACCOUNTID:user/*",
				"arn:aws:iam::ACCOUNTID:oidc-provider/*",
				"arn:aws:iam::ACCOUNTID:policy/*",
				"arn:aws:iam::aws:policy/*",
				"arn:aws:iam::ACCOUNTID:role/*"
			]
		}
	]
}
```

10. Follow steps 5-7, and Name this Policy as **Zeeve-Permissive-Protocol-Policy**.

11. *(Only Corda Enterprise)* Grant below permissions for Corda Enterprise.

```shell
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
            	"route53:GetHostedZone",
            	"route53:CreateHostedZone",
                "iam:CreateInstanceProfile",
                "iam:DeleteInstanceProfile",
                "iam:GetInstanceProfile",
                "iam:TagRole",
                "route53:GetChange",
                "route53:ChangeResourceRecordSets",
                "iam:RemoveRoleFromInstanceProfile",
                "iam:PutRolePolicy",
                "route53:ListTagsForResource",
                "iam:AddRoleToInstanceProfile",
                "route53:ListTagsForResources",
                "iam:DeleteRolePolicy",
                "route53:ListResourceRecordSets",
                "route53:AssociateVPCWithHostedZone"
            ],
            "Resource": [
                "arn:aws:route53:::hostedzone/*",
                "arn:aws:route53:::healthcheck/*",
                "arn:aws:route53:::change/*",
                "arn:aws:iam::ACCOUNTID:role/*",
                "arn:aws:iam::ACCOUNTID:instance-profile/*",
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
            	"kms:PutKeyPolicy",
            	"kms:DescribeKey",
            	"kms:CreateGrant",
                "kms:EnableKeyRotation",
                "kms:Decrypt",
                "kms:GetKeyRotationStatus",
                "kms:GenerateDataKey",
                "route53:DeleteHostedZone",
                "kms:GenerateDataKeyPair",
                "kms:CreateGrant",
                "kms:ScheduleKeyDeletion",
                "kms:GetKeyPolicy",
                "kms:ListResourceTags",
                "kms:TagResource"
            ],
            "Resource": [
                "arn:aws:kms:*:ACCOUNTID:key/*"
            ]
        },
        {
            "Effect": "Allow",
            "Action": [
            	"ecr:DeleteRepository",
                "ecr:PutImage",
            	"ecr:DeleteRepository",
            	"ecr:TagResource",
                "ecr:ListTagsForResource",
                "ecr:UploadLayerPart",
                "ecr:CompleteLayerUpload",
                "ecr:DescribeRepositories",
                "ecr:InitiateLayerUpload",
                "ecr:BatchCheckLayerAvailability"
            ],
            "Resource": "arn:aws:ecr:*:ACCOUNTID:repository/*",
        },
        {
            "Action": "ec2:*",
            "Effect": "Allow",
            "Resource": "*"
        },
        {
            "Action": "ec2:*",
            "Effect": "Allow",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "elasticloadbalancing:*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "cloudwatch:*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "autoscaling:*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": "eks:*",
            "Resource": "*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "rds:AddTagsToResource",
                "rds:DescribeDBSubnetGroups",
                "ecr:CreateRepository",
                "rds:DescribeGlobalClusters",
                "route53:ListHostedZones",
                "ecr:GetAuthorizationToken",
                "rds:CreateDBSubnetGroup",
                "rds:DeleteDBSubnetGroup",
                "rds:ListTagsForResource",
                "rds:CreateDBCluster",
                "rds:CreateDBInstance",
                "rds:DescribeDBInstances",
                "kms:CreateKey",
                "rds:DeleteDBCluster",
                "rds:DescribeDBClusters",
                "rds:DeleteDBInstance"
            ],
            "Resource": "*"
        }
    ]
}
```

12. Follow steps 5-7, and Name this Policy as **Zeeve-Corda-Enterprise-Policy**.

### Configuration on Zeeve Portal

To authorize your AWS account on Zeeve:-

1. Hover on **profile** 

    ![img](./images/profile.png)

2. Click on **My Account**
 
    ![img](./images/profilemenu.png)

3. Click on **My Cloud**.

    ![img](./images/editprofile.png)

4. Click on **AWS** and then click on 
    **Add AWS Cloud**.
   
    ![img](./images/addAWS.png)

5. You will need AWS Access Key and AWS Access Secret Key, to authenticate your AWS account with Zeeve.

    ![img](./images/awslogin.png)

## Digital Ocean Authorization

To authorize your Digital Ocean account on Zeeve you'll need to ensure certain things:-
 
> * User must have an account with enough permissions to create - 
> * Project
> * Droplets
> * Kubernetes service.
> * Specific Scope in DO Account:
>     * Read
>     * Write

After which on Zeeve do following steps:- 

1. Hover on **profile** 
 
    ![img](./images/profile.png)

2. Click on **My Account**
 
    ![img](./images/profilemenu.png)

3. Click on your cloud authentication for Digital Ocean account, click on **Authorize digital Ocean**.

    ![img](./images/editprofile.png)

4. Click on **DigitalOcean** and then click on 
    **Add Digital Ocean Cloud**.
   
    ![img](./images/addDO.png)

5. Authorize DigitalOcean will redirect you to login page, you can add your DigitalOcean credentials and then click on **Add Cloud**.

    ![img](./images/DOlogin.png)
    
6. After that click on the team which you want to give access and click on **Authorize Application**.

    ![img](./images/DOoauth.png)

## GCP Cloud Authorization

To authorize your GCP account on Zeeve you'll need to ensure certain things:-

### Configuration on GCP Portal

Enable Below APIs from Google Cloud Platform: 

- Compute Engine API
- Kubernetes Engine API

Steps to enable APIs on GCP Platform

1. Go to Google Cloud console: https://console.cloud.google.com/

2. Select the project, in which you need to enable APIs.

    ![img](./images/gcpdash.png)

3. Click on **APIs and services** from the navigation bar and click **Enabled APIs and services**

    ![img](./images/navbargcp.png)

4. Click on **+ Enable API and Services**

5. Search **Compute Engine API** in search bar.

    ![img](./images/gcpsearch.png)

6. Click on **Compute Engine API** -> **Enable/Manage** Option

    ![img](./images/gcpenable.png)

7. Follow 5-6 step for enabling **Kubernetes Engine API**.

8. User must have an account with enough permissions to create - 

> * Specific Permissions in GCP Account:
>     * 'compute.globalOperations.get'
>     * 'compute.machineTypes.get'
>     * 'compute.networks.create'
>     * 'compute.networks.delete'
>     * 'compute.networks.get'
>     * 'compute.networks.updatePolicy'
>     * 'compute.projects.get'
>     * 'compute.regionOperations.get'
>     * 'compute.regions.get'
>     * 'compute.routers.create'
>     * 'compute.routers.delete'
>     * 'compute.routers.get'
>     * 'compute.routers.update'
>     * 'compute.routes.create'
>     * 'compute.routes.delete'
>     * 'compute.routes.get'
>     * 'compute.subnetworks.create'
>     * 'compute.subnetworks.delete'
>     * 'compute.subnetworks.get'
>     * 'compute.zones.list'
>     * 'resourcemanager.projects.get'
>     * 'compute.disks.create'
>     * 'compute.instances.create'
>     * 'compute.instances.get'
>     * 'compute.instances.setMetadata'
>     * 'iam.serviceAccounts.create'
>     * 'iam.serviceAccounts.delete'
>     * 'iam.serviceAccounts.get'
>     * 'iam.serviceAccountKeys.create'
>     * 'iam.serviceAccountKeys.delete'
>     * 'iam.serviceAccountKeys.get'
>     * 'iam.serviceAccounts.actAs',
>     * 'container.clusters.create'
>     * 'container.clusters.delete'
>     * 'container.clusters.get'
>     * 'container.clusters.getCredentials'
>     * 'container.clusters.update'
>     * 'container.operations.get'
>     * 'container.clusters.list'
>     * 'container.deployments.delete'
>     * 'container.deployments.get'
>     * 'container.namespaces.list'
>     * 'container.namespaces.get'
>     * 'container.services.get',
>     * 'compute.disks.createSnapshot'
>     * 'compute.snapshots.get'
>     * 'compute.snapshots.create'
>     * 'compute.snapshots.useReadOnly'
>     * 'compute.snapshots.delete'
>     * 'compute.zones.get'
>     * 'storage.objects.create'
>     * 'storage.objects.delete'
>     * 'storage.objects.get'
>     * 'storage.objects.list'
>     * 'iam.serviceAccounts.signBlob'

### Configuration on Zeeve Portal

1. Hover on **profile** 
 
    ![img](./images/profile.png)

2. Click on **My Account**
 
    ![img](./images/profilemenu.png)

3. Click on **My Cloud**.

4. Click on **GCP** and then click on **Add GCP Cloud**.

   ![img](./images/addGCPCloud.png)

5. Authorize GCP will redirect you to login page, you can add your GCP credentials and then click on **Add Cloud**.

   ![img](./images/gcpLogin.png)

6. Login to your Google Cloud account using Google IDP.

   ![img](./images/loginGoogle.jpg)

7. Allow Zeeve to access your GCP Account.

   ![img](./images/allowgcpAccess.jpg)

8. You can view your creds in Zeeve Console.

   ![img](./images/credsGCP.jpg)

## Tencent Cloud Authorization

Before you authorize Tencent Cloud on Zeeve, you will need to add Zeeve's IDP into your Cloud account.

### Creating an OIDC IdP

1. On the left sidebar in the CAM console, select **Identity Providers** > **Role-Based SSO**.

    ![img](./images/createIDP.png)

2. On the **Role-Based SSO** page, click **Create IdP**.

3. On the page you enter, select **OIDC** as the IdP type and enter the following IdP information. <br>
**IdP Name**: ```zeeve_oauth``` <br>
**IdP URL**: ```https://login.microsoftonline.com/9188040d-6c67-4c5b-b112-36a304b66dad/v2.0``` <br>
**Client ID**: ```505b1146-13fe-4df6-927a-ca57321786fd``` <br>
**Public Key for Signature**: For this you can click on this link [(https://login.microsoftonline.com/common/discovery/v2.0/keys)](https://login.microsoftonline.com/common/discovery/v2.0/keys) then copy all the content and paste it in the column.

4. Click **Next** to enter the information review page.

    ![img](./images/addIDPInfo.png)

5. Confirm the information you entered and click **Complete** to save it.

### Creating a role for the IdP

1. On the left sidebar in the CAM console, click **Roles**.

    ![img](./images/createRole.png)

2. On the role management page, click **Create Role**.

3. Select **IdPs** as the role entity.

4. On the page you enter, select **OIDC** as the IdP type.

5. Select an IdP you created i.e **zeeve_oauth**.

6. Set conditions for the role: <br>
**oidc:aud**: ```505b1146-13fe-4df6-927a-ca57321786fd``` <br>
**oidc:sub**: Delete this.

    ![img](./images/addRoleInfo.png)

7. Click Next.

8. On the page you enter, associate the **QCloudResourceFullAccess** and the **QCloudFinanceFullAccess** policy with the role and click **Next**.

    ![img](./images/configureRolePolicy.png)

9. On the review page, enter the role name and role description (optional) and click **Complete** to save the above configurations.

### Authorizing Cloud account

1. Hover on **profile** 
 
    ![img](./images/profile.png)

2. Click on **My Account**
 
    ![img](./images/profilemenu.png)

3. Click on **My Cloud**.

4. Click on **Tencent** and then click on **Add Tencent Cloud**.

    ![img](./images/addTencentCloud.png)

5. Add the **ProviderId** and **RoleARN** that you have created in the previous steps.

    ![img](./images/tencentCreds.png)

6. Login through any of your microsoft personal account, work account or you can add an account.

    ![img](./images/tencentOAuth.png)

7. This will lead you to a consent screen where you will need to **Accept** the Terms & Conditions to allow Zeeve to use your credentials.

    ![img](./images/consentScreen.png)
