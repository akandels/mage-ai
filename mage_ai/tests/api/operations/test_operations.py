from mage_ai.api.operations import constants
from mage_ai.tests.api.operations.base import BaseApiTestCase
from unittest.mock import patch


class OperationTests(BaseApiTestCase):
    @patch('mage_ai.settings.DISABLE_EDIT_ACCESS', 1)
    async def test_execute_create_with_disable_edit_access(self):
        operation = self.build_operation(
            action=constants.CREATE,
            payload=dict(block=dict(
                name='test block'
            )),
            resource='blocks',
        )
        response = await operation.execute()

        self.assertIsNotNone(response['error'])

    @patch('mage_ai.settings.DISABLE_EDIT_ACCESS', 1)
    @patch('mage_ai.settings.REQUIRE_USER_AUTHENTICATION', 1)
    async def test_execute_create_with_disable_edit_access_and_user(self):
        operation = self.build_operation(
            action=constants.CREATE,
            payload=dict(block=dict(
                name='test block'
            )),
            resource='blocks',
        )
        response = await operation.execute()

        self.assertIsNotNone(response['error'])
