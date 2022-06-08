package depinject

import (
	"fmt"
	"github.com/stretchr/testify/require"
	"reflect"
	"testing"
)

func TestFullyQualifiedTypeName(t *testing.T) {
	pp := &preference{}
	p := preference{}
	fmt.Println(reflect.TypeOf(pp).Elem())
	require.Equal(t, fullyQualifiedTypeName(reflect.TypeOf(p)), fullyQualifiedTypeName(reflect.TypeOf(pp)))
}
